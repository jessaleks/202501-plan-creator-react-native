import React from "react";
import { render } from "@testing-library/react-native";
import CounterContainer from "./CounterContainer";

describe("CounterContainer", () => {
	it("renders correctly", () => {
		const { getByText } = render(<CounterContainer />);
		expect(getByText("Hello from CounterContainer.tsx")).toBeTruthy();
	});
});
