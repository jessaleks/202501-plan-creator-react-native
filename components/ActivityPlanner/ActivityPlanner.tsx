import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, Alert } from 'react-native';
import ActivityGroup from './ActivityGroup';
import PlanPreview from './PlanPreview';
import { styles } from './ActivityPlannerStyles';
import { groups as initialGroups } from './initialData'; // Import initial data
import axios from 'axios'; // For making API requests

const ActivityPlanner = () => {
    const [groups, setGroups] = useState(initialGroups);
    const [generatedPlan, setGeneratedPlan] = useState([]);
    const [error, setError] = useState('');

    const handleGroupChange = (index, field, value) => {
        const updatedGroups = [...groups];
        updatedGroups[index][field] = value;
        setGroups(updatedGroups);
    };

    const handleSubmit = async () => {
        if (groups.some((g) => !g.name || g.numberOfSessions < 1)) {
            setError("Please fill in all activity names and number of sessions");
            return;
        }

        try {
            const response = await axios.post('/api/v1/ics', {
                groups,
                remindersEnabled: true,
            });

            if (response.status !== 200) {
                throw new Error("Failed to generate plan");
            }

            const { plan } = response.data;

            if (plan) {
                const mappedPlan = plan.flatMap((group) =>
                    group.sessions.map((session) => ({
                        activity: session.name,
                        startTime: session.start,
                        endTime: session.end,
                        type: session.type,
                    }))
                );
                setGeneratedPlan(mappedPlan);
            }
            setError("");
        } catch (err) {
            setError(err.message || "An error occurred");
            Alert.alert("Error", err.message || "An error occurred"); // Display error alert
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Activity Planner</Text>
            <Text style={styles.description}>
                Plan your day simply using your calendar.
            </Text>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            {groups.map((group, index) => (
                <ActivityGroup
                    key={index.toString()} // Use index as key for simplicity in this example
                    group={group}
                    index={index}
                    onChange={handleGroupChange}
                    onRemove={() => {
                        const updatedGroups = groups.filter((_, i) => i !== index);
                        setGroups(updatedGroups);
                    }}
                />
            ))}

            <View style={styles.buttonContainer}>
                <Button
                    title="Add Activity Group"
                    onPress={() => {
                        setGroups([
                            ...groups,
                            {
                                name: "",
                                numberOfSessions: 1,
                                sessionLength: 50,
                                breakLength: 10,
                                interActivityBreak: 15,
                            },
                        ]);
                    }}
                />
                <Button title="Generate Plan" onPress={handleSubmit} />
            </View>

            {generatedPlan.length > 0 && <PlanPreview plan={generatedPlan} />}
        </ScrollView>
    );
};

export default ActivityPlanner;