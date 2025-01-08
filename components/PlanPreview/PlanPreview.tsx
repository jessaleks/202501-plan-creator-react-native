import React from 'react';
import { View, Text } from 'react-native';
import {format} from "date-fns"; // Or use date-fns
import { StyleSheet } from 'react-native';

type PlanPreviewProps = {
    plan: {
        activity: string;
        startTime: string;
        endTime: string;
        type: string;
    }[];
};

const PlanPreview = ({ plan }: PlanPreviewProps) => {
    if (!plan || plan.length === 0) {
        return <Text>No sessions generated yet.</Text>;
    }

    const groupedActivities = {};

    plan.forEach(session => {
        if (!groupedActivities[session.activity]) {
            groupedActivities[session.activity] = [];
        }
        groupedActivities[session.activity].push(session);
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Generated Plan</Text>
            {Object.entries(groupedActivities).map(([activityName, sessions]) => (
                <View key={activityName} style={styles.activityGroup}>
                    <Text style={styles.activityTitle}>{activityName}</Text>
                    {sessions.map((session, index) => (
                        <Text key={index.toString()} style={styles.session}>
                            {session.type === 'activity' ? `Session ${index + 1}: ` : session.type === 'break' ? `Break ${index + 1}: ` : "Transition: "}
                            {moment(session.startTime).format('h:mm A')} - {moment(session.endTime).format('h:mm A')}
                        </Text>
                    ))}
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
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