import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

type BreakTextProps = {}

export default function BreakText({}: BreakTextProps) {
    return (
        <ThemedView>
            <ThemedText>Hello from BreakText.tsx</ThemedText>
        </ThemedView>
    )
}