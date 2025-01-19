import React, { useEffect } from "react";
import { StyleSheet, type ViewProps } from "react-native";
import { ThemedView } from "../ThemedView/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import Animated, {
	useAnimatedStyle,
	withTiming,
	useSharedValue,
	FadeIn,
} from "react-native-reanimated";

const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);

export type ThemedCardProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
	variant?: "elevated" | "outlined";
};

export function ThemedCard({
	style,
	lightColor,
	darkColor,
	variant = "elevated",
	...rest
}: ThemedCardProps) {
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background",
	);
	const borderColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"text",
	);

	return (
		<AnimatedThemedView
			entering={FadeIn.duration(300)}
			style={[
				styles.card,
				variant === "elevated" && styles.elevatedCard,
				variant === "outlined" && styles.outlinedCard,
				{
					backgroundColor,
					borderColor: variant === "outlined" ? borderColor : "transparent",
				},
				style,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
		padding: 16,
	},
	elevatedCard: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	outlinedCard: {
		borderWidth: 1,
	},
});
