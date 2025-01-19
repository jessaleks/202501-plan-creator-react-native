import React from "react";
import { render } from "@testing-library/react-native";
import { ThemedView } from "./ThemedView";

describe("ThemedView", () => {
	it("renders correctly", () => {
		const { getByTestId } = render(<ThemedView testID="themed-view" />);
		expect(getByTestId("themed-view")).toBeTruthy();
	});

	it("applies custom styles", () => {
		const { getByTestId } = render(
			<ThemedView style={{ backgroundColor: "green" }} testID="themed-view" />,
		);
		expect(getByTestId("themed-view")).toHaveStyle({
			backgroundColor: "green",
		});
	});
});
