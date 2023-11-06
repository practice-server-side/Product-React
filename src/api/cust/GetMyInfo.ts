import kotlinClient from "../KotlinClient";
import Cookies from "js-cookie";

export type GetMyInfo = {
  custName: string;
  custPhone: string;
  custKey: string;
};

export const getMyInfo = async () => {
  try {
    const res = await kotlinClient.get<GetMyInfo>("/api/ch/cust");
    return res.data;
  } catch (error) {
    Cookies.remove("sessionId");
    throw error;
  }
};
