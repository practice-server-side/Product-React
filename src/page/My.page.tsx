import * as React from "react";
import myInfoHook from "../hook/MyInfoHook";

export const MyPage = () => {
  const { data } = myInfoHook();

  return (
    <>
      <h1>내 정보</h1>
      {data?.custName}
      <br />
      {data?.custPhone}
      <br />
      {data?.custKey}
      <br />
    </>
  );
};

export default MyPage;
