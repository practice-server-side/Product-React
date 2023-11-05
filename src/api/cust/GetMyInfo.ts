import kotlinClient from "../KotlinClient";

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
    alert("오류 발생");
    return error;
  }
};
