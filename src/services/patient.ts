import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

import { db } from "@/db/drizzle";
import { Patient, Users } from "@/db/schema";
import { PatientInsertSchema } from "@/db/types";

export const getPatient = async (patientID: string) => {
    const [patient] = await db
        .select({
            name: Users.name,
            dob: Patient.dob,
            gender: Patient.gender,
            location: Patient.location,
            email: Users.email,
        })
        .from(Users)
        .leftJoin(Patient, eq(Users.id, Patient.userID))
        .where(eq(Patient.id, patientID));

    return patient;
};

export const createNewPatient = async (
    patient: Zod.infer<typeof PatientInsertSchema>
) => {
    const [user] = await db
        .select()
        .from(Users)
        .where(eq(Users.id, patient.userID));

    if (!user) {
        throw new HTTPException(400, {
            message: "User does not exist",
        });
        return;
    }

    if (user.role !== "GUEST") {
        throw new HTTPException(400, {
            message: "User already have a role assigned",
        });
    }

    const [{ id: patientID }] = await db
        .insert(Patient)
        .values(patient)
        .returning({ id: Patient.id });

    await db
        .update(Users)
        .set({ role: "PATIENT" })
        .where(eq(Users.id, patient.userID));

    return patientID;
};
