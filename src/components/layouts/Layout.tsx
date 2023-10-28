import SideBar from "../sideBar/SideBar";
import Header from "../header/Header";

import "./layout.scss";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="layout-default">
      <Header></Header>
      <SideBar />
      <div className="g-view">{children}</div>
    </div>
  );
}

export default Layout;
