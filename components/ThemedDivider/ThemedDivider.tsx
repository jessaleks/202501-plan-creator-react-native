import React from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedDividerProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
	orientation?: "horizontal" | "vertical";
};

export function ThemedDivider({
	style,
	lightColor,
	darkColor,
	orientation = "horizontal",
	...rest
}: ThemedDividerProps) {
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"text",
	);

	return (
		<View
			style={[
				orientation === "horizontal" ? styles.horizontal : styles.vertical,
				{ backgroundColor },
				style,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	horizontal: {
		height: StyleSheet.hairlineWidth,
		width: "100%",
		opacity: 0.2,
	},
	vertical: {
		width: StyleSheet.hairlineWidth,
		height: "100%",
		opacity: 0.2,
	},
});
