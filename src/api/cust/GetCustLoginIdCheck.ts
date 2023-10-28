import KotlinClient from "../KotlinClient";

export type getCustLoginIdCheckResponse = {
  exists: boolean;
};

export const getCustLoginIdCheck = (loginId: string) => {
  return KotlinClient.get<getCustLoginIdCheckResponse>(
    "/api/noch/cust/" + loginId
  );
};
