import { ThemedView } from "@/components/ThemedView/ThemedView";
import { ThemedText } from "@/components/ThemedText/ThemedText";

type BreakTextProps = {};

export default function BreakText({}: BreakTextProps) {
	// TODO gets texts from i18n/locales/en/translationEN.json or i18n/locales/pl/translationPL.json and outputs random one
	return (
		<ThemedView>
			<ThemedText>Hello from BreakText.tsx</ThemedText>
		</ThemedView>
	);
}
