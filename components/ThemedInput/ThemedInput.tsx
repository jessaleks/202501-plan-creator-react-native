import React from 'react';
import {StyleSheet, TextInput, type TextInputProps} from 'react-native';
import {useThemeColor} from '@/hooks/useThemeColor';

export type ThemedInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedInput({style, lightColor, darkColor, ...rest}: ThemedInputProps) {
    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <TextInput
            style={[{backgroundColor, color}, styles.input, style]}
            placeholderTextColor={color}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});