import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().min(6, { message: "Email required" }).email(),
  password: z.string().min(1, { message: "Password required" }),
});

export const RegisterSchema = z.object({
  email: z.string().min(6, { message: "Email required" }).email(),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name required" }),
});
