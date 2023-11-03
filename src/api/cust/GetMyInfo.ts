import kotlinClient from "../KotlinClient";

export type GetMyInfo = {
  custName: string;
  custPhone: string;
  custKey: string;
};

export const getMyInfo = () => {
  return kotlinClient.get<GetMyInfo>("/api/ch/cust");
};
