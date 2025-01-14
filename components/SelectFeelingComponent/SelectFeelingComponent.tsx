import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "../ThemedText";
import type {Feeling} from "@/models/Activity";
import {useState} from "react";

type SelectFeelingComponentProps = {}

// the component that lets users select how they are feeling after a session
// numerical and graphical (emojis or icons) scale
export default function SelectFeelingComponent({}: SelectFeelingComponentProps) {
    const [feeling, setFeeling] = useState<Feeling>();
    return (
        <ThemedView>
            <ThemedText>Hello from SelectFeelingComponent.tsx</ThemedText>
        </ThemedView>
    )
}