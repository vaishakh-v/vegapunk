import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import "dotenv/config";
import consola from "consola";

consola.box(process.env);

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
