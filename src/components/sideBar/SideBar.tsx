import { Link } from "react-router-dom";
import "./sideBar.scss";

interface ListItem {
  pageId: string;
  label: string;
  routerLink: string;
}

export default function SideBar() {
  const list = [
    {
      pageId: "P001",
      label: "상품 관리",
      routerLink: "/mainPage",
    },
    {
      pageId: "P002",
      label: "주문 관리",
      routerLink: "/mainPage",
    },
    {
      pageId: "P003",
      label: "배송 관리",
      routerLink: "/mainPage",
    },
    {
      pageId: "P004",
      label: "서비스 관리",
      routerLink: "/mainPage",
    },
  ];

  return (
    <div className="side-bar-wrap">
      <ul>
        {list.map((el: ListItem, i: number) => {
          return (
            <li key={i}>
              <Link className="text-01" to={el.routerLink}>
                {el.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
