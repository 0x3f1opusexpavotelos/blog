import { z } from "zod";
import { registerSchema, type TRegisterSchema, type TSignInSchema } from "./validation";


export async function register(credentials: TRegisterSchema) {
  const validation = registerSchema.safeParse(credentials);
  if (!validation.success) {
    return {
      status: "error",
      message: validation.error.issues[0]?.message || "Invalid credentials",
    }
  }

}

export async function signIn(credentials: TSignInSchema) {


  const validation = registerSchema.safeParse(credentials);
  if (!validation.success) {
    return {
      status: "error",
      message: validation.error.issues[0]?.message || "Invalid credentials",
    }
  }
}




export async function logout() {



}


export async function signInWithOAuthProvider(
  provider: "github" | "google" | "facebook"
) {

}

export const forgetPassword = async () => { }



export const resetPassword = async ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => {

  const newPasswordSchema = z.object({
    password: z.string().min(6),
    passwordConfirm: z.string().min(6),
  })

}
