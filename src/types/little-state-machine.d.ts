import "little-state-machine";

declare module "little-state-machine" {
  interface GlobalState {
    name: string;
    email: string;
    phone: string;
    plan: string;
    step: number;
    yearly: boolean;
  }
}
