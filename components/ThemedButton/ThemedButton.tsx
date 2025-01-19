import React from "react";
import { Pressable, StyleSheet, type PressableProps } from "react-native";
import { ThemedText } from "../ThemedText/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import Animated, {
	useAnimatedStyle,
	withSpring,
	useSharedValue,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export type ThemedButtonProps = PressableProps & {
	lightColor?: string;
	darkColor?: string;
	title: string;
	variant?: "primary" | "secondary" | "outline";
};

export function ThemedButton({
	style,
	lightColor,
	darkColor,
	title,
	variant = "primary",
	...rest
}: ThemedButtonProps) {
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background",
	);
	const textColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"text",
	);

	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<AnimatedPressable
			onPressIn={() => {
				scale.value = withSpring(0.95);
			}}
			onPressOut={() => {
				scale.value = withSpring(1);
			}}
			style={[
				({ pressed }) => ({
					...styles.button,
					...(variant === "primary" && styles.primaryButton),
					...(variant === "secondary" && styles.secondaryButton),
					...(variant === "outline" && styles.outlineButton),
					backgroundColor:
						variant === "primary" ? backgroundColor : "transparent",
					opacity: pressed ? 0.8 : 1,
					borderColor: variant === "outline" ? textColor : "transparent",
					...(typeof style === "object" ? style : {}),
				}),
				animatedStyle,
			]}
			{...rest}
		>
			<ThemedText
				style={[
					styles.text,
					variant === "outline" && { color: textColor },
					variant === "secondary" && { color: textColor },
				]}
			>
				{title}
			</ThemedText>
		</AnimatedPressable>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "transparent",
	},
	primaryButton: {
		minWidth: 120,
	},
	secondaryButton: {
		minWidth: 120,
	},
	outlineButton: {
		minWidth: 120,
	},
	text: {
		fontSize: 16,
		fontWeight: "600",
	},
});
