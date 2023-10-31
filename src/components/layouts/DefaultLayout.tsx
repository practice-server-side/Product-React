import { Layout, Menu, theme } from "antd";
import { useRecoilState } from "recoil";

import { LoginState } from "../../state/LoginState";
import DefaultHeader from "../header/DefaultHeader";
import SidebarMenu from "./SidebarMenu";

const { Content, Footer, Sider } = Layout;

function DefaultLayout({ children }: React.PropsWithChildren) {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const [loginState] = useRecoilState(LoginState);

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
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>고도몰</Footer>
    </Layout>
  );
}

export default DefaultLayout;
