import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemedButton } from "./ThemedButton";

describe("ThemedButton", () => {
	it("renders correctly with title", () => {
		const { getByText } = render(<ThemedButton title="Click Me" />);
		expect(getByText("Click Me")).toBeTruthy();
	});

	it("handles press events", () => {
		const mockPress = jest.fn();
		const { getByText } = render(
			<ThemedButton title="Click Me" onPress={mockPress} />,
		);
		fireEvent.press(getByText("Click Me"));
		expect(mockPress).toHaveBeenCalled();
	});

	it("renders with different variants", () => {
		const { getByText } = render(
			<ThemedButton title="Primary" variant="primary" />,
		);
		expect(getByText("Primary")).toBeTruthy();

		const { getByText: getByTextSecondary } = render(
			<ThemedButton title="Secondary" variant="secondary" />,
		);
		expect(getByTextSecondary("Secondary")).toBeTruthy();

		const { getByText: getByTextOutline } = render(
			<ThemedButton title="Outline" variant="outline" />,
		);
		expect(getByTextOutline("Outline")).toBeTruthy();
	});

	it("applies custom styles", () => {
		const { getByText } = render(
			<ThemedButton title="Styled Button" style={{ backgroundColor: "red" }} />,
		);
		expect(getByText("Styled Button")).toHaveStyle({ backgroundColor: "red" });
	});
});
