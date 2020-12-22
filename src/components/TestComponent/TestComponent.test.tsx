import { render, fireEvent } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("TestComponent component", () => {
  it("should be able to add new tech", () => {
    const { getByText, getByTestId } = render(<TestComponent />);

    fireEvent.click(getByText("Add tech"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
  });
});
