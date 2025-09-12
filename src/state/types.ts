import type { TEXTS_PLANS } from "../constants/text";

type Plan = (typeof TEXTS_PLANS)[number]["name"];
declare module "little-state-machine" {
  interface GlobalState {
    name: string;
    email: string;
    phone: string;
    plan: Plan;
    planPrice: number;
    step: number;
    yearly: boolean;
    services: boolean;
    storage: boolean;
    profile: boolean;
    isFinish: boolean;
    isLoading: boolean;
  }
}
