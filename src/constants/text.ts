type TTEXTS_ADD_ONS = {
  id: "services" | "storage" | "profile";
  name: string;
  description: string;
  monthly: number;
  yearly: number;
};

export const TEXTS = [
  {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

export const TEXTS_SIDEBAR = ["Your info", "Select plan", "Add-ons", "Summary"];

export const TEXTS_PLANS = [
  {
    name: "arcade",
    monthly: 9,
    yearly: 90,
  },
  {
    name: "advanced",
    monthly: 12,
    yearly: 120,
  },
  {
    name: "pro",
    monthly: 15,
    yearly: 150,
  },
];

export const TEXTS_ADD_ONS: TTEXTS_ADD_ONS[] = [
  {
    id: "services",
    name: "Online Services",
    monthly: 1,
    yearly: 10,
    description: "Access to multiplayer games",
  },
  {
    id: "storage",
    name: "Larger storage",
    monthly: 2,
    yearly: 20,
    description: "Extra 1TB of cloud save",
  },
  {
    id: "profile",
    name: "Customizable profile",
    monthly: 2,
    yearly: 20,
    description: "Custom theme on your profile",
  },
];
