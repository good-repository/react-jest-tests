export function addTech(tech: string) {
  return {
    type: "ADD_TECH",
    payload: { tech },
  };
}

export function getTechsSuccess(data: string[]) {
  return {
    type: "GET_TECH_SUCCESS",
    payload: { data },
  };
}

export function getTechsFailure() {
  return {
    type: "GET_TECH_FAILURE",
  };
}
