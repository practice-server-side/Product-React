import useMyInfoQuery from "../query/useMyInfoQuery";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const myInfoHook = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useMyInfoQuery();

  useEffect(() => {
    if (isError) {
      console.log(error);
      alert("로그인 되지 않았습니다.");
      navigate("/login");
    }
  }, [navigate, isError]);

  return {
    isLoading,
    isError,
    data
  };
};

export default myInfoHook;
