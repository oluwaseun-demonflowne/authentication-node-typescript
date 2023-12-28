import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { db } from "./connect";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});

export async function call() {
  const allUsers = await db.select().from(users);
  console.log(allUsers);
}
