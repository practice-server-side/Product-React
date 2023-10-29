import KotlinClient from "../KotlinClient";
import { JoinFormRequest } from "@/page/Join.page";

export type postCustJoinResponse = {
  exists: boolean;
};

export const postCustJoin = (joinFormRequest: JoinFormRequest) => {
  return KotlinClient.post<postCustJoinResponse>(
    "/api/noch/cust/join",
    joinFormRequest
  );
};
