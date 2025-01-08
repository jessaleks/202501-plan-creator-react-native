import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './ActivityGroupStyles'; // Import stylesheet

const ActivityGroup = ({ group, index, onChange, onRemove }) => {
    const [name, setName] = useState(group.name);
    const [numberOfSessions, setNumberOfSessions] = useState(group.numberOfSessions);
    const [sessionLength, setSessionLength] = useState(group.sessionLength);
    const [breakLength, setBreakLength] = useState(group.breakLength);
    const [interActivityBreak, setInterActivityBreak] = useState(group.interActivityBreak);

    const handleInputChange = (field, value) => {
        const newValue = Math.max(field === 'numberOfSessions' ? 1 : 0, Number(value)); // Handle min values
        switch (field) {
            case 'name':
                setName(newValue);
                break;
            case 'numberOfSessions':
                setNumberOfSessions(newValue);
                break;
            case 'sessionLength':
                setSessionLength(newValue);
                break;
            case 'breakLength':
                setBreakLength(newValue);
                break;
            case 'interActivityBreak':
                setInterActivityBreak(newValue);
                break;
            default:
                break;
        }
        onChange(index, field, newValue); // Update parent state
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Total Time Planned: {/* Calculate total time */}</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => handleInputChange('name', text)}
                placeholder="Activity Name"
            />
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={numberOfSessions.toString()}
                onChangeText={(text) => handleInputChange('numberOfSessions', text)}
                placeholder="Number of Sessions"
            />
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={sessionLength.toString()}
                onChangeText={(text) => handleInputChange('sessionLength', text)}
                placeholder="Session Length (minutes)"
            />
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={breakLength.toString()}
                onChangeText={(text) => handleInputChange('breakLength', text)}
                placeholder="Break Length (minutes)"
            />
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={interActivityBreak.toString()}
                onChangeText={(text) => handleInputChange('interActivityBreak', text)}
                placeholder="Break Length After Activity (minutes)"
            />
            <Button title="Remove" onPress={() => onRemove(index)} />
        </View>
    );
};

export default ActivityGroup;