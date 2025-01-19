import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText/ThemedText";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedInput } from "@/components/ThemedInput/ThemedInput";
import { useSignals } from "@preact/signals-react/runtime";
import { ActivitiesStore } from "@/stores";

const ActivityForm = () => {
	useSignals();

	const [activityName, setActivityName] = useState("");
	const [numberOfSessions, setNumberOfSessions] = useState(1);
	const [sessionLength, setSessionLength] = useState(30);
	const [breakLength, setBreakLength] = useState(5);

	const handleSubmit = () => {
		ActivitiesStore.value.push();
	};

	return (
		<ThemedView style={styles.container}>
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
				value={numberOfSessions.toString()}
				onChangeText={(text: string) =>
					setNumberOfSessions(Math.max(1, Number(text)))
				}
				keyboardType="numeric"
			/>
			<ThemedText style={styles.label}>Session Length (minutes):</ThemedText>
			<ThemedInput
				value={sessionLength.toString()}
				onChangeText={(text: string) =>
					setSessionLength(Math.max(1, Number(text)))
				}
				keyboardType="numeric"
			/>
			<ThemedText style={styles.label}>Break Length (minutes):</ThemedText>
			<ThemedInput
				value={breakLength.toString()}
				onChangeText={(text: string) =>
					setBreakLength(Math.max(0, Number(text)))
				}
				keyboardType="numeric"
			/>
			<Button title="Submit" onPress={handleSubmit} />
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	container: {
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

export default ActivityForm;
