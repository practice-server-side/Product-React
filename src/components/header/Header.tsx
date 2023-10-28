import { Link } from "react-router-dom";

import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1>My shoping Mall</h1>
      <ul>
        <li>
          <Link to="/custPage">Join Page</Link>
        </li>
        <li>
          <Link to="/mainPage">My Page</Link>
        </li>
      </ul>
    </header>
  );
}
