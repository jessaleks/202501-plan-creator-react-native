import React, { useState } from "react";
import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Animated, {
	useAnimatedStyle,
	withTiming,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export type ThemedInputProps = TextInputProps & {
	lightColor?: string;
	darkColor?: string;
};

export function ThemedInput({
	style,
	lightColor,
	darkColor,
	...rest
}: ThemedInputProps) {
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background",
	);
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	const borderWidth = useSharedValue(1);
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		borderWidth: borderWidth.value,
		transform: [{ scale: scale.value }],
	}));

	return (
		<AnimatedTextInput
			style={[{ backgroundColor, color }, styles.input, style, animatedStyle]}
			placeholderTextColor={color}
			onFocus={() => {
				borderWidth.value = withTiming(2);
				scale.value = withSpring(1.02);
			}}
			onBlur={() => {
				borderWidth.value = withTiming(1);
				scale.value = withSpring(1);
			}}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor: "gray",
		borderRadius: 4,
		marginBottom: 16,
		paddingHorizontal: 8,
	},
});
