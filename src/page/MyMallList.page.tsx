import * as React from "react";
import useMyMallListQuery from "../query/useMyMallListQuery";

export const MyMallList = () => {
  const { data } = useMyMallListQuery();

  console.log("data", data);

  return (
    <>
      <h1>내 정보</h1>
      {data?.malls[0].mallName}
      <tr />
    </>
  );
};

export default MyMallList;
