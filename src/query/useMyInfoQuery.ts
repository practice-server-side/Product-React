import { getMyInfo } from "../api/cust/GetMyInfo";
import { useQuery } from "react-query";

export const useMyInfoQuery = () => {
  return useQuery("/api/ch/cust", () => getMyInfo);
};

export default useMyInfoQuery;
