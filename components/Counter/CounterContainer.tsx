import { ThemedView } from "@/components/ThemedView/ThemedView";

type CounterContainerProps = {};

export default function CounterContainer({}: CounterContainerProps) {
	return (
		<ThemedView>
			<ThemedView>Hello from CounterContainer.tsx</ThemedView>
		</ThemedView>
	);
}
