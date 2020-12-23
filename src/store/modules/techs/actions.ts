export function addTech(tech: string) {
  return {
    type: "ADD_TECH",
    payload: { tech },
  };
}
