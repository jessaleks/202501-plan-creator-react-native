import {CookieStore} from './CookieStore'
import {SessionsStore} from "./SessionsStore";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { signal } from '@preact/signals-react';
import { Session } from './SessionsStore';

// Function to save signals to async storage
export const saveSessionsToStorage = async (sessions: Session[]) => {
    try {
        const jsonValue = JSON.stringify(sessions);
        await AsyncStorage.setItem('@sessions', jsonValue);
    } catch (e) {
        console.error('Failed to save sessions to storage', e);
    }
};

// Function to load signals from async storage
export const loadSessionsFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@sessions');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Failed to load sessions from storage', e);
        return [];
    }
};
export {CookieStore, SessionsStore}




