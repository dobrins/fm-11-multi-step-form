import { z } from "zod";

const REQUIRED = { message: "This field is required" };

export const step1Schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, REQUIRED)
    .email({ message: "Enter a valid email" }),
  name: z
    .string()
    .trim()
    .min(1, REQUIRED)
    .min(2, "Name is too short")
    .max(80, "Name is too long")
    .regex(/^[\p{L}\p{M}' -]+$/u, "Only letters, spaces, apostrophes, hyphens"),
  phone: z
    .string()
    .trim()
    .min(1, REQUIRED)
    .transform((s) => s.replace(/[^\d+]/g, ""))
    .refine((s) => /^\+?\d{7,15}$/.test(s), "Enter a valid phone number"),
  step: z.number(),
});

export type Step1Inputs = z.infer<typeof step1Schema>;
