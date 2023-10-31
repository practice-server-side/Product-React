import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from "@ant-design/icons";

const SidebarMenu = () => {
  // 이곳에서 사이드바에 대한 상태관리 기능 추가
  return [
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
};

export default SidebarMenu;
