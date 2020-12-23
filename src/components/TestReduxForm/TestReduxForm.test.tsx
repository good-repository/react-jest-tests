import { render, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { addTech } from "../../store/modules/techs/actions";
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

  it("shold be able to add new tech", () => {
    const { getByTestId, getByLabelText } = render(<TestReduxForm />);

    const dispatch = jest.fn();

    // @ts-ignore: Unreachable code error
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith(addTech("Node.js"));
  });
});
