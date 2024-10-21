import api from "./axios/axios";

interface LoginParams {
  username: string;
  password: string;
}

interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

export const loginUser = (data: LoginParams) => {
  return api.post("/auth/login", data);
};

export const registerUser = (data: RegisterParams) => {
  return api.post("/auth/register", data);
};

export const currentUser = () => {
  return api.get("/auth/currentUser");
};
