import api from "./axios/axios";

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams {
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

export const logoutUser = () => {
  return api.post("/auth/logout");
};

export const currentUser = () => {
  return api.get("/auth/currentUser");
};
