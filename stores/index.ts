import {CookieStore} from './CookieStore'
import {ActivitiesStore, Activity, Feeling, initializeSessionsStore} from "./ActivitiesStore";

import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save signals to async storage
export const saveActivitiesToStorage = async (activities: Activity[]) => {
    try {
        const jsonValue = JSON.stringify(activities);
        await AsyncStorage.setItem('@activities', jsonValue);
    } catch (e) {
        console.error('Failed to save sessions to storage', e);
    }
};

// Function to load signals from async storage
export const loadActivitiesFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@activities');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Failed to load activities from storage', e);
        return [];
    }
};
export {CookieStore, ActivitiesStore, initializeSessionsStore, Activity, Feeling}




