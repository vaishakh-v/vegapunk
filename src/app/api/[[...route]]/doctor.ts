import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { DoctorInsertSchema } from "@/db/types";
import { createNewDoctor, getDoctor } from "@/services/doctor";

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

            const doctor = await getDoctor(id);
            return c.json({ doctor });
        }
    )
    .post("/", zValidator("form", DoctorInsertSchema), async (c) => {
        const doctor = c.req.valid("form");

        //TODO : check for the doc
        //TODO : check for the zip code and location

        const id = await createNewDoctor(doctor);
        return c.json(
            { message: "Successfully created new patient", id: id },
            200
        );
    });
