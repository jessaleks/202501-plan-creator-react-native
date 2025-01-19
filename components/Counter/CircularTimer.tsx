import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
	Easing,
	useAnimatedProps,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedText } from "@/components/ThemedText/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { tintColorDark, tintColorLight } from "@/constants/Colors";

type CircularTimerProps = {
	totalTime: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularTimer = ({ totalTime }: CircularTimerProps) => {
	const color = useThemeColor(
		{ light: tintColorLight, dark: tintColorDark },
		"tint",
	);

	const radius = 100;
	const circumference = 2 * Math.PI * radius;

	const progress = useSharedValue(0);
	const animatedProps = useAnimatedProps(() => ({
		strokeDashoffset: circumference * (1 - progress.value),
	}));

	useEffect(() => {
		progress.value = withTiming(1, {
			duration: totalTime * 1000,
			easing: Easing.linear,
		});
	}, [totalTime, progress]);

	return (
		<ThemedView style={styles.container}>
			<Svg width={radius * 2} height={radius * 2}>
				<Circle
					cx={radius}
					cy={radius}
					r={radius}
					stroke={color}
					strokeWidth={10}
				/>
				<AnimatedCircle
					cx={radius}
					cy={radius}
					r={radius}
					stroke={color}
					strokeWidth={10}
					strokeDasharray={circumference}
					strokeDashoffset={circumference}
					animatedProps={animatedProps}
				/>
			</Svg>
			<ThemedView style={styles.textContainer}>
				<ThemedText style={styles.text}>Time Elapsed</ThemedText>
				<ThemedText style={styles.timerText}>
					{Math.floor((totalTime - progress.value * totalTime) % 60)
						.toString()
						.padStart(2, "0")}
				</ThemedText>
			</ThemedView>
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
	},
	textContainer: {
		position: "absolute",
		alignItems: "center",
	},
	text: {
		fontSize: 16,
	},
	timerText: {
		fontSize: 24,
		fontWeight: "bold",
	},
});

export default CircularTimer;
