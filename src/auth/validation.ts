import { z } from "zod";


export const passwordSchema = z
  .string()
  .min(8, "Password must contain at least 8 characters");


export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});

export type TRegisterSchema = z.infer<typeof registerSchema>;



export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordSchema
});

export type TSignInSchema = z.infer<typeof signInSchema>;





