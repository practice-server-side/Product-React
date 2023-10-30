import { atom } from "recoil";

export const LoginState = atom({
  key: "loginState", // 고유한 키 값
  default: null // 기본 값
});
