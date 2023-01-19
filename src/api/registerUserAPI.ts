import { APIBaseURL } from "./baseURL";

type RegisterUserPost = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
};

export const RegisterUserPost = async ({
  name,
  email,
  phone,
  password,
  passwordConfirm
}: RegisterUserPost): Promise<void> => {
  await APIBaseURL.post("/users", {
    name,
    email,
    phone,
    password,
    passwordConfirm
  });
};