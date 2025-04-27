



import { integer, pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";


export const userRoles = ["admin", "user"] as const

const userRoleEnum = pgEnum("user_roles", userRoles)

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(), // salt:hash
  isActive: integer().default(0),
  activationToken: varchar({ length: 255 }).notNull(),
  role: userRoleEnum().notNull().default("user"),
  createAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});



export type OAuthProvider = "discord" | "github"



export const subscribersTable = pgTable("subscribers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),

})
