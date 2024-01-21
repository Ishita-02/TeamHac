import { z } from "zod";

export const signupInput = z.object({
    email: z.string(),
    password: z.string()
})
console.log("hi there");

export type SignupParams = z.infer<typeof signupInput>;

