import { useState } from "react";
import { getCustLoginIdCheck } from "../api/cust/GetCustLoginIdCheck";
import { postCustJoin } from "../api/cust/PostCustJoin";

type JoinFormState = {
  loginId: string;
  password: string;
  passwordConfirm: string;
};

export const useJoinForm = () => {
  const [joinForm, setJoinForm] = useState<JoinFormState>({
    loginId: "",
    password: "",
    passwordConfirm: ""
  });

  const [loginIdValid, setLoginIdValid] = useState(false);

  const handleLoginIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinForm((prev) => ({ ...prev, loginId: e.target.value }));
  };

  const handleValidateLoginId = async () => {
    const res = await getCustLoginIdCheck(joinForm.loginId);
    setLoginIdValid(!res.data.exists);

    return !res.data.exists;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinForm((prev) => ({ ...prev, password: e.target.value }));
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJoinForm((prev) => ({ ...prev, passwordConfirm: e.target.value }));
  };

  const handleJoin = () => {
    if (joinForm.password !== joinForm.passwordConfirm) {
      return "비밀번호가 일치하지 않습니다.";
    } else {
      const res = postCustJoin({
        loginId: joinForm.loginId,
        loginPassword: joinForm.password,
        userName: "성현",
        userPhone: "01045839103"
      });

      return res;
    }
  };

  return {
    joinForm,
    loginIdValid,
    handleLoginIdChange,
    handleValidateLoginId,
    handlePasswordChange,
    handlePasswordConfirmChange,
    handleJoin
  };
};
