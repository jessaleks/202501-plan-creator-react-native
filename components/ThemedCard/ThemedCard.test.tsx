import React from "react";
import { render } from "@testing-library/react-native";
import { ThemedCard } from "./ThemedCard";

describe("ThemedCard", () => {
	it("renders correctly with default variant", () => {
		const { getByTestId } = render(<ThemedCard testID="card" />);
		expect(getByTestId("card")).toBeTruthy();
	});

	it("renders elevated variant", () => {
		const { getByTestId } = render(
			<ThemedCard variant="elevated" testID="card" />,
		);
		expect(getByTestId("card")).toBeTruthy();
	});

	it("renders outlined variant", () => {
		const { getByTestId } = render(
			<ThemedCard variant="outlined" testID="card" />,
		);
		expect(getByTestId("card")).toBeTruthy();
	});

	it("applies custom styles", () => {
		const { getByTestId } = render(
			<ThemedCard style={{ backgroundColor: "yellow" }} testID="card" />,
		);
		expect(getByTestId("card")).toHaveStyle({ backgroundColor: "yellow" });
	});
});
