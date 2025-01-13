import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {format} from "date-fns";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

type PlanPreviewProps = {
    plan: {
        activity: string;
        startTime: string;
        endTime: string;
        type: string;
    }[];
};

const PlanPreview = ({plan}: PlanPreviewProps) => {
    if (!plan || plan.length === 0) {
        return <ThemedText>No sessions generated yet.</ThemedText>;
    }

    const groupedActivities = {};

    plan.forEach(session => {
        if (!groupedActivities[session.activity]) {
            groupedActivities[session.activity] = [];
        }
        groupedActivities[session.activity].push(session);
    });

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Generated Plan</Text>
            {Object.entries(groupedActivities).map(([activityName, sessions]) => (
                <ThemedView key={activityName} style={styles.activityGroup}>
                    <ThemedText style={styles.activityTitle}>{activityName}</ThemedText>
                    {sessions.map((session) => (
                        <Text key={sesssion.toString()} style={styles.session}>
                            {session.type === 'activity' ? `Session ${index + 1}: ` : session.type === 'break' ? `Break ${index + 1}: ` : "Transition: "}
                            {format(session.startTime, "p")} - {format(session.startTime, "p")}
                        </Text>
                    ))}
                </ThemedView>
            ))}
        </ThemedView>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    activityGroup: {
        marginBottom: 16,
    },
    activityTitle: {
        fontSize: 18,
        fontWeight: 'semibold',
        marginBottom: 8,
    },
    session: {
        marginBottom: 4,
    },
});
export default PlanPreview;