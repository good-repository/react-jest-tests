import reducer, { INITIAL_STATE } from "./reducer";
import * as Techs from "../actions/actions";

describe("Techs reducer", () => {
  it("ADD_TECH", () => {
    const state = reducer(INITIAL_STATE, Techs.addTech("Node.js"));

    expect(state).toStrictEqual(["Node.js"]);
  });

  it("DEFAULT", () => {
    const state = reducer(undefined, {
      type: "NO_TYPE",
    });

    expect(state).toStrictEqual([]);
  });
});
