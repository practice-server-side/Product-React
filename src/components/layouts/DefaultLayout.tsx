import { Outlet } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";

import { LoginState } from "../../state/LoginState";
import DefaultHeader from "./DefaultHeader";
import SidebarMenu from "./SidebarMenu";
import { useEffect } from "react";

const { Content, Footer, Sider } = Layout;

function DefaultLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const [loginState, setLoginState] = useRecoilState(LoginState);

  useEffect(() => {
    if (Cookies.get("sessionId") !== null) {
      setLoginState(Cookies.get("sessionId") !== null);
    }
  }, [loginState]);

  const sidebarList = SidebarMenu();

  return (
    <Layout>
      <DefaultHeader></DefaultHeader>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            height: "90vh"
          }}
        >
          {loginState ? (
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={sidebarList}
              />
            </Sider>
          ) : null}
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>고도몰</Footer>
    </Layout>
  );
}

export default DefaultLayout;
