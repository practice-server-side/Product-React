import * as React from "react";
import myInfoHook from "../hook/MyInfoHook";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MyPage = () => {
  const { data } = myInfoHook();
  const [menu] = useState([{ label: "마이 몰 리스트", path: "/myPage/mall" }]);

  return (
    <>
      <h1>내 정보</h1>
      {data?.custName}
      <br />
      {data?.custPhone}
      <br />
      {data?.custKey}
      <br />
      <tr />
      <Link to={menu[0].path}>{menu[0].label}</Link>
    </>
  );
};

export default MyPage;
