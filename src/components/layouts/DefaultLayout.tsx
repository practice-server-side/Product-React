import { Layout, Menu, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from "@ant-design/icons";

import DefaultHeader from "../header/DefaultHeader";

const { Content, Footer, Sider } = Layout;

const sidebarMenu = [
  {
    icon: <UserOutlined />
  },
  {
    icon: <LaptopOutlined />
  },
  {
    icon: <NotificationOutlined />
  }
].map((el, index) => {
  const key = String(index + 1);

  const newLocal = new Array(4).fill(null).map((_, j) => {
    const subKey = index * 4 + j + 1;
    return {
      key: subKey,
      label: `option${subKey}`
    };
  });

  return {
    key: `sub${key}`,
    icon: el.icon,
    label: `subnav ${key}`,

    children: newLocal
  };
});

function DefaultLayout({ children }: React.PropsWithChildren) {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
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
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={sidebarMenu}
            />
          </Sider>
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
