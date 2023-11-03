import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCustLogin } from "../api/cust/postCustLogin";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { LoginState } from "../state/LoginState";

export type LoginFormState = {
  loginId: string;
  loginPassword: string;
};

export const useLoginForm = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginState, setLoginState] = useRecoilState(LoginState);

  const [loginForm, setLoginForm] = useState<LoginFormState>({
    loginId: "",
    loginPassword: ""
  });

  const handleLoginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, loginId: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, loginPassword: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const res = await postCustLogin(loginForm);
      const sessionId = res.data.sessionId;
      Cookies.set("sessionId", sessionId);
      setLoginState(sessionId);
      navigate("/mainPage");
    } catch (error) {
      if (error.response.status === 404) {
        return alert("아이디 또는 비밀번호가 잘못되었습니다.");
      } else {
        return alert(
          "알 수 없는 오류가 발생했습니다.\n잠시 후에 다시 시도해주세요"
        );
      }
    }
  };

  return {
    loginForm,
    handleLoginIdChange,
    handlePasswordChange,
    handleLogin
  };
};
