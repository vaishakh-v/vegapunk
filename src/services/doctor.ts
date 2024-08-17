import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

import { db } from "@/db/drizzle";
import { Doctor, Users } from "@/db/schema";
import { DoctorInsertSchema } from "@/db/types";

export const getDoctor = async (doctorID: string) => {
    const [doctor] = await db
        .select({
            name: Users.name,
            email: Users.email,
            specialization: Doctor.specialization,
            regNo: Doctor.regNo,
            location: Doctor.location,
        })
        .from(Users)
        .leftJoin(Doctor, eq(Users.id, Doctor.userID))
        .where(eq(Doctor.id, doctorID));

    return doctor;
};

export const createNewDoctor = async (
    doctor: Zod.infer<typeof DoctorInsertSchema>
) => {
    const [user] = await db
        .select()
        .from(Users)
        .where(eq(Users.id, doctor.userID));

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

    const [{ id: doctorID }] = await db
        .insert(Doctor)
        .values(doctor)
        .returning({ id: Doctor.id });

    await db
        .update(Users)
        .set({ role: "DOCTOR" })
        .where(eq(Users.id, doctor.userID));

    return doctorID;
};
