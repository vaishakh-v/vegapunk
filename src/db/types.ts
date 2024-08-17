import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { Doctor, Patient } from "./schema";

export const PatientSchema = createSelectSchema(Patient);
export const PatientInsertSchema = createInsertSchema(Patient, {
    userID: z.string().min(1, { message: "User ID is required" }),
    dob: z
        .string()
        .min(1, { message: "Date of birth is required" })
        .regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "Date of birth must be in the format YYYY-MM-DD",
        }),
    gender: z.string().min(1, { message: "Gender is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    zipCode: z.string().min(1, { message: "Zip Code is required" }),
}).omit({
    id: true,
});

export const DoctorSchema = createSelectSchema(Doctor);
export const DoctorInsertSchema = createInsertSchema(Doctor, {
    userID: z.string().min(1, { message: "User ID is required" }),
    specialization: z
        .string()
        .min(1, { message: "Specialization is required" }),
    regNo: z.string().min(1, { message: "Registration number is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    zipCode: z.string().min(1, { message: "Zip Code is required" }),
}).omit({
    id: true,
});
