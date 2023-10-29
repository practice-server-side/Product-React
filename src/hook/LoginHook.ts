import { useState } from "react";

interface LoginFormState {
  loginId: string;
  password: string;
}

export const useLoginForm = () => {
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    loginId: "",
    password: ""
  });

  const handleLoginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, loginId: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleJoin = () => {
    const apiRequest = true;
    if (apiRequest) {
      return "비밀번호가 일치하지 않습니다.";
    } else {
      return alert("로그인 성공");
    }
  };

  return {
    loginForm,
    handleLoginIdChange,
    handlePasswordChange,
    handleJoin
  };
};
