import { render, fireEvent } from "@testing-library/react";

import TestForm from "./TestForm";

describe("TestComponent component", () => {
  it("should be able to add new tech by a form", () => {
    const { getByText, getByTestId, getByLabelText } = render(<TestForm />);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});
