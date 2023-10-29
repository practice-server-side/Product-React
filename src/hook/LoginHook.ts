import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCustLogin } from "../api/cust/postCustLogin";
import Cookies from "js-cookie";

export type LoginFormState = {
  loginId: string;
  loginPassword: string;
};

export const useLoginForm = () => {
  const navigate = useNavigate(); //TODO : useHistory 쓰고싶은데 왜 네비게이트밖에 안됨 ㅠㅠ

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
      Cookies.set("sessionId", res.data.sessionId);
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
