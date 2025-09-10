import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    name: string;
    email: string;
    phone: string;
    plan: string;
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
