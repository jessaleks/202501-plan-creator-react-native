import "react-native-reanimated";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/useColorScheme";
import "@/i18n";
import { db } from "@/db";
import migrations from "@/drizzle/migrations";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedText } from "@/components/ThemedText";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const { success, error } = useMigrations(db, migrations);

	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (error) {
		return (
			<ThemedView>
				<ThemedText>Migration error: {error.message}</ThemedText>
			</ThemedView>
		);
	}
	if (!success) {
		return (
			<ThemedView>
				<ThemedText>Migration is in progress...</ThemedText>
			</ThemedView>
		);
	}

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.centeredView}>
				<ThemeProvider
					value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
				>
					<Stack initialRouteName="(tabs)">
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
						<Stack.Screen name="+not-found" />
					</Stack>
					<StatusBar style="auto" />
				</ThemeProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
