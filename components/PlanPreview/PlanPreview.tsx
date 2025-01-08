import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment'; // Or use date-fns
import { styles } from './PlanPreviewStyles';

const PlanPreview = ({ plan }) => {
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

export default PlanPreview;