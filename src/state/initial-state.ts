import type { GlobalState } from "little-state-machine";

export const initialState: GlobalState = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  planPrice: 0,
  step: 1,
  yearly: false,
  services: true,
  storage: true,
  profile: false,
  isFinish: false,
  isLoading: false,
};
