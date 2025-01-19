import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useTranslation } from "react-i18next";

type PositiveReinforcementProps = {};

export default function PositiveReinforcementText({}: PositiveReinforcementProps) {
	const positiveReinforcements = useTranslation();

	// TODO
	// loading the reinforcements from the i18n file.
	// It's an object so we are loading them, and then creating an iterator from the values
	// then randomly choosing one of them to show to the user

	return (
		<ThemedView>
			<ThemedText>Hello from PositiveReinforcement.tsx</ThemedText>
		</ThemedView>
	);
}
