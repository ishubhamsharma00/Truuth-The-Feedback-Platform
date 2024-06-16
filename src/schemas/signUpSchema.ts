import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3, "Username should be atleast 3 characters")
    .max(16, "Username should be atmax 16 characters")
    .regex(/^[a-zA-Z0-0_]+$/, "Username should not contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})
})