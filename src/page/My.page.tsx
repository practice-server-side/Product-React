import * as React from "react";
import myInfoHook from "../hook/MyInfoHook";

export const MyPage = () => {
  const { myInfoData } = myInfoHook();

  console.log("myInfoData.data", myInfoData.data);

  return (
    <>
      <h1>내 정보</h1>
    </>
  );
};

export default MyPage;
