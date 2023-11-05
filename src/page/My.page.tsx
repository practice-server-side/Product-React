import * as React from "react";
import myInfoHook from "../hook/MyInfoHook";

export const MyPage = () => {
  const { myInfoData } = myInfoHook();

  return (
    <>
      <h1>내 정보</h1>
      {myInfoData.data?.custName}
      <br />
      {myInfoData.data?.custPhone}
      <br />
      {myInfoData.data?.custKey}
      <br />
    </>
  );
};

export default MyPage;
