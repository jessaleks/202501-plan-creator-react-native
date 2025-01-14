import {Stack} from 'expo-router';
import React from 'react';
import {useColorScheme} from '@/hooks/useColorScheme';
import {Colors} from "@/constants/Colors";

export default function TabLayout() {
    const colorScheme = useColorScheme();


    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    statusBarBackgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,

                }}
            />
            <Stack.Screen
                name="counter"
                options={{
                    title: 'Activity in Progress',
                    headerShown: true,
                    statusBarBackgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,
                }}
            />
        </Stack>
    );
}
