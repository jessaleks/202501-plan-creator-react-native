import React from "react";
import { render } from "@testing-library/react-native";
import { ThemedDivider } from "./ThemedDivider";

describe("ThemedDivider", () => {
	it("renders correctly with default orientation", () => {
		const { getByTestId } = render(<ThemedDivider testID="divider" />);
		expect(getByTestId("divider")).toBeTruthy();
	});

	it("renders horizontal divider", () => {
		const { getByTestId } = render(
			<ThemedDivider orientation="horizontal" testID="divider" />,
		);
		expect(getByTestId("divider")).toHaveStyle({ height: 1 });
	});

	it("renders vertical divider", () => {
		const { getByTestId } = render(
			<ThemedDivider orientation="vertical" testID="divider" />,
		);
		expect(getByTestId("divider")).toHaveStyle({ width: 1 });
	});

	it("applies custom styles", () => {
		const { getByTestId } = render(
			<ThemedDivider style={{ backgroundColor: "blue" }} testID="divider" />,
		);
		expect(getByTestId("divider")).toHaveStyle({ backgroundColor: "blue" });
	});
});
