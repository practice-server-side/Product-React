import { getMyInfo } from "../api/cust/GetMyInfo";
import { useQuery } from "react-query";

export const useMyInfoQuery = () => {
  return useQuery("/api/ch/cust", getMyInfo, {
    retry: false,
    onError: (error) => {
      console.log("에러 발생", error);
    }
  });
};

export default useMyInfoQuery;
