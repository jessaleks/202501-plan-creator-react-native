import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {nanoid} from "nanoid/non-secure";
import {Feeling} from "@/stores/ActivitiesStore";

export const Activity = sqliteTable("Activity", {
    id: text().primaryKey().$defaultFn(() => nanoid()),
    date: integer({mode: "timestamp"}).notNull(),
    length: integer().notNull(),
    feeling: text().$type<Feeling>(),
    wasInterrupted: integer({mode: "boolean"}).$type<boolean>(),
    timestamp: integer({mode: "timestamp"}).$defaultFn(() => new Date()),
    numberOfSessions: integer().$default(() => 1),
    sessionLength: integer().$default(() => 50),
    breakLength: integer().$default(() => 10),
})

