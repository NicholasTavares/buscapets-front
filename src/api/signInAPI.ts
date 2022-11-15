import baseURL from "./baseURL";

type SignInPost = {
  email: string;
  password: string;
};

type SignInResponse = {
  token: string;
};

export const signInPost = async ({
  email,
  password,
}: SignInPost): Promise<SignInResponse> => {
  const response = await baseURL.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
