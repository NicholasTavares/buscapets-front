import { BaseURL } from "../baseURL";
import { CreateUser } from "../../interfaces/api/users.interface";

export const RegisterUser = async ({
  name,
  email,
  phone,
  password,
  passwordConfirm
}: CreateUser): Promise<void> => {
  await BaseURL.post("/users", {
    name,
    email,
    phone,
    password,
    passwordConfirm
  });
};