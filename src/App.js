import React from "react";
import "./App.css";
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import JoinPage from "./page/Join.page.tsx";
import MainPage from "./page/Main.page.tsx";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

const headerMenu = [
  {label: '고도몰', path: '/mainPage'},
  {label: '로그인', path: '/login'},
  {label: '회원가입', path: '/joinPage'},
  {label: '마이페이지', path: '/myPage'},
];

const sidebarMenu: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

function App() {
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout>
        <Header style={{display: 'flex', alignItems: 'center'}}>
          <div className="demo-logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['고도몰']}>
            {headerMenu.map(item => (
              <Menu.Item key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Layout style={{padding: '24px 0', background: colorBgContainer}}>
            <Sider style={{background: colorBgContainer}} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%'}}
                items={sidebarMenu}
              />
            </Sider>
            <Content style={{padding: '0 24px', minHeight: 280}}>
              <Routes>
                <Route path="/joinPage" element={<JoinPage/>}/>
                <Route path="/mainPage" element={<MainPage/>}/>
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>고도몰</Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
