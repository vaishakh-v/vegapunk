import { relations } from "drizzle-orm";
import {
    integer,
    primaryKey,
    sqliteTable,
    text,
} from "drizzle-orm/sqlite-core";
import { v4 as uuid } from "uuid";

export const Users = sqliteTable("user", {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: text("emailVerified"),
    image: text("image"),
    role: text("role", {
        enum: ["ADMIN", "PATIENT", "GUEST", "DOCTOR"],
    }).default("GUEST"),
});
export type UserRoleType = "ADMIN" | "PATIENT" | "GUEST" | "DOCTOR";
export const userRelations = relations(Users, ({ many }) => ({
    accounts: many(Accounts),
}));

export const Accounts = sqliteTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => Users.id, { onDelete: "cascade" }),
        type: text("type"),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
);
export const accountRelations = relations(Accounts, ({ one }) => ({
    user: one(Users, {
        fields: [Accounts.userId],
        references: [Users.id],
    }),
}));

export const Patient = sqliteTable("patient", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => uuid()),
    userID: text("user_id")
        .notNull()
        .unique()
        .references(() => Users.id),
    dob: text("date_of_birth").notNull(),
    gender: text("gender").notNull(),
    location: text("location").notNull(),
    zipCode: text("zip_code").notNull(),
});

export const Doctor = sqliteTable("doctor", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => uuid()),
    userID: text("user_id")
        .notNull()
        .unique()
        .references(() => Users.id),
    specialization: text("specialization").notNull(),
    regNo: text("reg_no").notNull().unique(),
    location: text("location").notNull(),
    zipCode: text("zip_code").notNull(),
});
