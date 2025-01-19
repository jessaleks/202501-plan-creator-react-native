import React from "react";
import { render } from "@testing-library/react-native";
import CircularTimer from "./CircularTimer";

describe("CircularTimer", () => {
	it("renders correctly with given totalTime", () => {
		const { getByText } = render(<CircularTimer totalTime={60} />);
		expect(getByText("Time Elapsed")).toBeTruthy();
	});
});
