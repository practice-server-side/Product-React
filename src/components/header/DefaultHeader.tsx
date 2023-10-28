import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Header } = Layout;

const headerMenu = [
  { label: "고도몰", path: "/mainPage" },
  { label: "로그인", path: "/login" },
  { label: "회원가입", path: "/joinPage" },
  { label: "마이페이지", path: "/myPage" },
];

function DefaultHeader() {
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
