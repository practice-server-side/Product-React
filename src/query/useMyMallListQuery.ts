import { useQuery } from "react-query";
import { getMyMallList } from "../api/mall/GetMyMallList";

export const useMyMallListQuery = () => {
  return useQuery("/api/ch/mall", getMyMallList, {
    refetchOnWindowFocus: false, // 윈도우 초점을 받았을 때 새로고침 비활성화
    refetchOnReconnect: false, // 네트워크 재연결 시 새로고침 비활성화
    refetchOnMount: false, // 마운트 시 새로고침 비활성화
    retry: false,
    onError: (error) => {
      console.log("에러 발생", error);
    }
  });
};

export default useMyMallListQuery;
