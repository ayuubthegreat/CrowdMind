import z, { email } from "zod";


export const loginSchema = z.object({
    email: z.string().min(1, "Email is too short").max(100, "Whoa, man! That's too long of an email!").email("Email address invaild."),
    password: z.string().min(7, "Password is too small").max(100, "Whoa, man! Your password is too large! Tone it down a little bit."),
})
export const registerSchema = z.object({
    name: z.string().min(1, "Name is too small").max(100, "Whoa, man! Is your name really that long?!"),
    email: z.string().min(1, "Email is too short").max(100, "Whoa, man! That's too long of an email!").email("Email address invaild."),
    password: z.string().min(7, "Password is too small").max(100, "Whoa, man! Your password is too large! Tone it down a little bit."),
})
