import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { PatientInsertSchema } from "@/db/types";
import { createNewPatient, getPatient } from "@/services/patient";

export default new Hono()
    .get(
        "/:id",
        zValidator(
            "param",
            z.object({
                id: z.string(),
            })
        ),
        async (c) => {
            const { id } = c.req.valid("param");

            const patient = await getPatient(id);
            return c.json({ patient });
        }
    )
    .post("/", zValidator("form", PatientInsertSchema), async (c) => {
        const patient = c.req.valid("form");

        //TODO : check for the doc
        //TODO : check for the zip code and location

        const id = await createNewPatient(patient);
        return c.json(
            { message: "Successfully created new patient", id: id },
            200
        );
    });
