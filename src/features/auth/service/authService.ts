import axios from "axios"
import { LoginPayload, SignUpPayload } from "./types"


const extractErrorMessage = (error: unknown, fallback: string) => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.response?.data?.error ||
      fallback
    );
  }
  return fallback;
}

export const login = async ({ email, password }: LoginPayload) => {
  try {
    const res = await axios.post("/api/auth/login", { email, password });
    return res.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error, "Login failed"));
  }
};

export const signup = async ({ name, email, password }: SignUpPayload) => {
  try {
    const res = await axios.post("/api/auth/signup", {
      name,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    throw new Error(extractErrorMessage(error, "Signup failed"));
  }
};