import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useLocalSearchParams} from "expo-router";

export default function CounterScreen() {
    const params = useLocalSearchParams<{
        length: number,
        breakLength: number,
        repetitions: number,
    }>()
    
    return (
        <ThemedView>
            <ThemedText>Hello from TabTwoScreen.tsx</ThemedText>
        </ThemedView>
    );
}
