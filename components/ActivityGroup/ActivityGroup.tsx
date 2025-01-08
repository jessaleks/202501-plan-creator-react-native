import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './ActivityGroupStyles'; // Import stylesheet

type ActivityGroupProps = {
    group: {
        name: string;
        numberOfSessions: number;
        sessionLength: number;
        breakLength: number;
        interActivityBreak: number;
    };
    index: number;
    onChange: (index: number, field: string, value: string | number) => void;
    onRemove: (index: number) => void;
};

const ActivityGroup = ({ group, index, onChange, onRemove }: ActivityGroupProps) => {
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

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: 'white',
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    heading: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },
});

export default ActivityGroup;