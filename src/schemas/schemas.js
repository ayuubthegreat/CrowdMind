import z from "zod";


export const loginSchema = z.object({
    email: z.string().min(1, "Email is too short").max(100, "Whoa, man! That's too long of an email!").email("Email address invaild."),
    password: z.string().min(7, "Password is too small").max(100, "Whoa, man! Your password is too large! Tone it down a little bit."),
})
export const registerSchema = z.object({
    name: z.string().min(1, "Name is too small").max(100, "Whoa, man! Is your name really that long?!"),
    email: z.string().min(1, "Email is too short").max(100, "Whoa, man! That's too long of an email!").email("Email address invaild."),
    password: z.string().min(7, "Password is too small").max(100, "Whoa, man! Your password is too large! Tone it down a little bit."),
})
export const community_postSchema = z.object({
    title: z.string().min(1, "Title is too small").max(100, "Whoa, man! That's too long?"),
    description: z.string().optional(),
    content: z.string().min(5, "Too small").max(1000, "Too large, man! Tone it down."),
    tags: z.string().optional(),
    priority: z.int().optional(),
})
export const prioritySchema = z.object({
    priority: z.int().min(0).max(100),
})
