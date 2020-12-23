import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import TestReduxForm from "./TestReduxForm";

jest.mock("react-redux");

describe("TestReduxForm component", () => {
  it("should render tech list", () => {
    //ignoring types bellow just because of mockImplementation error
    //i'm not checking type here, just checking if the "useSelector" it's called

    // @ts-ignore: Unreachable code error
    useSelector.mockImplementation((cb) => cb({ techs: ["Node.js", "React"] }));

    const { getByText, getByTestId } = render(<TestReduxForm />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("React"));
  });
});
