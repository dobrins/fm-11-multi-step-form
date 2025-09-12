import type { GlobalState } from "little-state-machine";

export type Payload = Partial<GlobalState>;

export default function updateAction(
  state: GlobalState,
  payload: Payload
): GlobalState {
  return {
    ...state,
    ...payload,
  };
}
