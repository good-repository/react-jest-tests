import { render, fireEvent, cleanup } from "@testing-library/react";

import TestForm from "./TestForm";

describe("TestComponent component", () => {
  it("should be able to add new tech by a form", () => {
    const { getByText, getByTestId, getByLabelText } = render(<TestForm />);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });

  it("should store techs in storage", () => {
    let { getByText, getByTestId, getByLabelText } = render(<TestForm />);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    cleanup();

    ({ getByText, getByTestId, getByLabelText } = render(<TestForm />));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "techList",
      JSON.stringify(["Node.js"])
    );
    expect(localStorage.getItem).toBeCalledWith("techList");
  });
});
