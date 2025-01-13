import {signal} from "@preact/signals-react";
import {loadSessionsFromStorage} from "@/stores/index";

export type Feeling = 'good' | 'neutral' | 'bad';

// one of the Sessions that users may complete
export type AppSession = {
    id: string;
    // the total length
    length: string;
    // how did the user feel after the session
    feeling: Feeling;
    timestamp: string;
    wasInterrupted: boolean;
}

export const SessionsStore = signal<AppSession[]>([]);

export const initializeSessionsStore = async () => {
    SessionsStore.value = await loadSessionsFromStorage();
};
