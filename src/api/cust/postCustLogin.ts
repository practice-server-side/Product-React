import KotlinClient from "../KotlinClient";
import { LoginFormState } from "@/hook/LoginHook";

export type postCustLoginResponse = {
  sessionId: string;
};

export const postCustLogin = (loginFormState: LoginFormState) => {
  return KotlinClient.post<postCustLoginResponse>(
    "/api/noch/cust/login",
    loginFormState
  );
};
