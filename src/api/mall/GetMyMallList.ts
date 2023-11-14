import kotlinClient from "../KotlinClient";
import Cookies from "js-cookie";

export type GetMyMallList = {
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  malls: {
    mallId: string;
    mallName: string;
  }[];
};

export const getMyMallList = async () => {
  try {
    const res = await kotlinClient.get<GetMyMallList>("/api/ch/mall");
    return res.data;
  } catch (error) {
    Cookies.remove("sessionId");
    return error;
  }
};
