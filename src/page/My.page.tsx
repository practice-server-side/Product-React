import * as React from "react";
import myInfoHook from "../hook/MyInfoHook";

export const MyPage = () => {
  const { myInfoData } = myInfoHook();

  console.log("myInfoData", myInfoData);

  return (
    <>
      <h1>아직 준비중</h1>
    </>
  );
};

export default MyPage;
