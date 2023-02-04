import { BaseURL } from "../baseURL";
import { SignIn, SignInResponse } from "../../interfaces/api/auth.interface";

export const signIn = async ({
  email,
  password,
}: SignIn): Promise<SignInResponse> => {
  const response = await BaseURL.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
