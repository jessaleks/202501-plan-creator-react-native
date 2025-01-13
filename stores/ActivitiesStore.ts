import {signal} from "@preact/signals-react";
import {loadActivitiesFromStorage} from "@/stores/index";

export type Feeling = 'good' | 'neutral' | 'bad';

// one of the Sessions that users may complete
export type Activity = {
    id: string;
    // the total length
    length: string;
    // how did the user feel after the session
    feeling: Feeling;
    timestamp: string;
    wasInterrupted: boolean;
    numberOfSessions: number,
    sessionLength: number,
    breakLength: number,
}

export const ActivitiesStore = signal<Activity[]>([]);

export const initializeSessionsStore = async () => {
    ActivitiesStore.value = await loadActivitiesFromStorage();
};
