import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().min(6, { message: "Email required" }).email(),
  password: z.string().min(6, { message: "Password required" }),
});
