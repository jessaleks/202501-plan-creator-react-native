import { ThemedText } from "@/components/ThemedText/ThemedText";
import { ThemedView } from "@/components/ThemedView/ThemedView";
import { useLocalSearchParams } from "expo-router";

export default function CounterScreen() {
	const params = useLocalSearchParams<{
		length: string;
		breakLength: string;
		repetitions: string;
	}>();

	return (
		<ThemedView>
			<ThemedText>Hello from TabTwoScreen.tsx</ThemedText>
		</ThemedView>
	);
}
