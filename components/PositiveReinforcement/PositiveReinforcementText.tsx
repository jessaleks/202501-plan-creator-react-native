import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";

type PositiveReinforcementProps = {}

export default function PositiveReinforcementText({}: PositiveReinforcementProps) {
    return (
        <ThemedView>
            <ThemedText>Hello from PositiveReinforcement.tsx</ThemedText>
        </ThemedView>
    )
}