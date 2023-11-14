import * as React from "react";
import useMyMallListQuery from "../query/useMyMallListQuery";

export const MyMallList = () => {
  const { data } = useMyMallListQuery();

  console.log("data", data);

  return <>몰리스트</>;
};

export default MyMallList;
