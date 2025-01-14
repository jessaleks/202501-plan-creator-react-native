import {ExpoSQLiteDatabase} from "drizzle-orm/expo-sqlite";
import {Activity as ActivityTable, ActivityInsertZodSchema} from "@/db/schema";
import {desc, eq} from "drizzle-orm";

// one of the Sessions that users may complete
export type Activity = {
    id: string;
    // the total length
    length: string;
    timestamp: string;
    wasInterrupted: boolean;
    numberOfSessions: number,
    sessionLength: number,
    breakLength: number,
}

// these db functions should have been put in a separate file and a models folder but whatever

export const insertActivityToDb = async (activity: Activity, db: ExpoSQLiteDatabase) => {
    try {
        const parsed = ActivityInsertZodSchema.parse(activity);
        await db.insert(ActivityTable).values({
            createdAt: parsed.createdAt,
            length: parsed.length,
            wasInterrupted: parsed.wasInterrupted,
            numberOfSessions: parsed.numberOfSessions,
            sessionLength: parsed.sessionLength,
            breakLength: parsed.breakLength
        }).execute();
    } catch (e) {
        console.error('Failed to save sessions to storage', e);
    }
};

// Function to load signals from async storage
export const selectAllActivitiesFromDb = async (db: ExpoSQLiteDatabase) => {
    try {
        return await db.select().from(ActivityTable).orderBy(desc(ActivityTable.createdAt)).execute();
    } catch (e) {
        console.error('Failed to load activities from storage', e);
        return [];
    }
};

export const selectOneActivityFromDb = async (id: string, db: ExpoSQLiteDatabase) => {
    try {
        return await db.selectDistinct().from(ActivityTable).where(eq(ActivityTable.id, id)).limit(1).execute();
    } catch (e) {
        console.error('Failed to load activity from storage', e);
        return [];
    }
}