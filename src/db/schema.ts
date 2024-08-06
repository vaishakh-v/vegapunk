import { relations } from "drizzle-orm";
import { date, integer, pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: date("emailVerified"),
    image: text("image"),
});
export const userRelations = relations(users, ({ many }) => ({
    account: many(account),
}));
export const usersSchema = createInsertSchema(users);

export const account = pgTable(
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
    }),
);
export const accountsSchema = createInsertSchema(account);
export const accountRelations = relations(account, ({ one }) => ({
    userId: one(users, {
        fields: [account.userId],
        references: [users.id],
    }),
}));
