import {
    integer,
    primaryKey,
    sqliteTable,
    text,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// export const userRoleEnum = sqliteTable("role", [
//     "USER",
//     "GUEST",
//     "ADMIN",
//     "DOCTOR",
// ]);

export const users = sqliteTable("user", {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: text("emailVerified"),
    image: text("image"),
    role: text("role", { enum: ["ADMIN", "USER", "GUEST", "DOCTOR"] }).default(
        "GUEST"
    ),
});
export type UserRoleType = "ADMIN" | "USER" | "GUEST" | "DOCTOR";
export const userRelations = relations(users, ({ many }) => ({
    accounts: many(account),
}));

export const account = sqliteTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
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
export const accountRelations = relations(account, ({ one }) => ({
    user: one(users, {
        fields: [account.userId],
        references: [users.id],
    }),
}));
