import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import PositiveReinforcementText from "@/components/PositiveReinforcement/PositiveReinforcementText";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedInput } from "@/components/ThemedInput/ThemedInput";

const ActivityPlanner = () => {
	const [error, setError] = useState("");
	const [activityName, setActivityName] = useState("");
	const [sessionLength, setSessionLength] = useState(30);
	const [breakLength, setBreakLength] = useState(10);
	const [repetitions, setRepetitions] = useState(1);

	const handleSubmit = async () => {
		// Handle form submission
		console.log({
			activityName,
			sessionLength,
			breakLength,
			repetitions,
		});
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Activity Planner</Text>
			<PositiveReinforcementText />

			{error ? <Text style={styles.error}>{error}</Text> : null}

			<ThemedView style={styles.formContainer}>
				<ThemedText style={styles.label}>
					Activity Name (e.g., 'Work', 'Study', 'Exercise'):
				</ThemedText>
				<ThemedInput
					value={activityName}
					onChangeText={setActivityName}
					placeholder="Enter activity name"
				/>
				<ThemedText style={styles.label}>Number of Sessions:</ThemedText>
				<ThemedInput
					value={repetitions.toString()}
					onChangeText={(text) => setRepetitions(Math.max(1, Number(text)))}
					keyboardType="numeric"
				/>
				<ThemedText style={styles.label}>Session Length (minutes):</ThemedText>
				<ThemedInput
					value={sessionLength.toString()}
					onChangeText={(text) => setSessionLength(Math.max(1, Number(text)))}
					keyboardType="numeric"
				/>
				<ThemedText style={styles.label}>Break Length (minutes):</ThemedText>
				<ThemedInput
					value={breakLength.toString()}
					onChangeText={(text) => setBreakLength(Math.max(0, Number(text)))}
					keyboardType="numeric"
				/>
				<Button title="Submit" onPress={handleSubmit} />
			</ThemedView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 16,
		backgroundColor: "#f0f0f0",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
		textAlign: "center",
	},
	error: {
		backgroundColor: "#f8d7da",
		borderColor: "#f5c6cb",
		color: "#721c24",
		padding: 10,
		marginBottom: 10,
		borderRadius: 4,
	},
	formContainer: {
		padding: 16,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 8,
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	label: {
		fontWeight: "bold",
		marginBottom: 8,
	},
});

export default ActivityPlanner;
