import { Hono } from "hono";
import { handle } from "hono/vercel";
import { HTTPException } from "hono/http-exception";

import { auth } from "@/auth";

const app = new Hono().basePath("/api");

app.onError((err, c) => {
    if (err instanceof HTTPException) {
        return err.getResponse();
    }

    return c.json({ error: "Internal error" }, 500);
});

// IMPORTANT : Below routes should not be used in the backend api, cause they are used in another api endpoints
// ------- /api/auth/*

app.get("/user", async (c) => {
    const session = await auth();
    const user = session?.user;
    return c.json({ user });
});

// const routes = app.route("/" , );

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

// export type AppType = typeof routes;
