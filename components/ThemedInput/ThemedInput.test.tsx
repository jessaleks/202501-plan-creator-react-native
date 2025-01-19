import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemedInput } from "./ThemedInput";

describe("ThemedInput", () => {
	it("renders correctly", () => {
		const { getByPlaceholderText } = render(
			<ThemedInput placeholder="Type here" />,
		);
		expect(getByPlaceholderText("Type here")).toBeTruthy();
	});

	it("handles focus and blur events", () => {
		const { getByPlaceholderText } = render(
			<ThemedInput placeholder="Type here" />,
		);
		const input = getByPlaceholderText("Type here");

		fireEvent.focus(input);
		// Add assertions to check for styles or state changes on focus

		fireEvent.blur(input);
		// Add assertions to check for styles or state changes on blur
	});

	it("applies custom styles", () => {
		const { getByPlaceholderText } = render(
			<ThemedInput placeholder="Type here" style={{ borderColor: "red" }} />,
		);
		const input = getByPlaceholderText("Type here");
		expect(input).toHaveStyle({ borderColor: "red" });
	});
});
