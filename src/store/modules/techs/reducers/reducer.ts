import produce from "immer";

export const INITIAL_STATE = [];

interface payloadInterface {
  tech: string;
}

interface actionInterface {
  type: string;
  payload?: payloadInterface;
}

export default function techs(
  state: string[] = INITIAL_STATE,
  action: actionInterface
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_TECH":
        draft?.push(action.payload.tech);
        break;
      default:
    }
  });
}
