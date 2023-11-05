import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import { useRecoilState } from "recoil";
import { LoginState } from "../../state/LoginState";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const { Header } = Layout;

function DefaultHeader() {
  const [loginState] = useRecoilState(LoginState);
  const [headerMenu, setHeaderMenu] = useState([
    { label: "고도몰", path: "/mainPage" },
    { label: "로그인", path: "/login" },
    { label: "회원가입", path: "/joinPage" }
  ]);

  useEffect(() => {
    if (Cookies.get("sessionId") !== null) {
      const updatedMenu = headerMenu.filter(
        (item) => item.label !== "로그인" && item.label !== "회원가입"
      );
      updatedMenu.push({ label: "마이페이지", path: "/myPage" });
      setHeaderMenu(updatedMenu);
    }
  }, [loginState]);

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["고도몰"]}>
        {headerMenu.map((item) => (
          <Menu.Item key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default DefaultHeader;
