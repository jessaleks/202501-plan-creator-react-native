import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {nanoid} from "nanoid/non-secure";

import {createInsertSchema, createSelectSchema} from 'drizzle-zod';

export const Activity = sqliteTable("Activity", {
    id: text().primaryKey().$defaultFn(() => nanoid()),
    length: integer().notNull(),
    createdAt: integer({mode: "timestamp_ms"}).$defaultFn(() => new Date()),
    wasInterrupted: integer({mode: "boolean"}).$type<boolean>(),
    numberOfSessions: integer().$default(() => 1),
    sessionLength: integer().$default(() => 50),
    breakLength: integer().$default(() => 10),
})

export const ActivitySelectZodSchema = createSelectSchema(Activity)
export const ActivityInsertZodSchema = createInsertSchema(Activity)