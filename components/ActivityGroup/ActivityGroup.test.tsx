import React from "react";
import { render } from "@testing-library/react-native";
import ActivityForm from "./ActivityGroup";

describe("ActivityForm", () => {
	it("renders correctly", () => {
		const { getByText } = render(<ActivityForm />);
		expect(
			getByText("Activity Name (e.g., 'Work', 'Study', 'Exercise'):"),
		).toBeTruthy();
		expect(getByText("Number of Sessions:")).toBeTruthy();
		expect(getByText("Session Length (minutes):")).toBeTruthy();
		expect(getByText("Break Length (minutes):")).toBeTruthy();
	});
});
