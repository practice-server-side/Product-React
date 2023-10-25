import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import JoinPage from "./page/Join.page.tsx";
import MainPage from "./page/Main.page.tsx";

function Header() {
  return <>
    <h1>My shoping Mall</h1>
  </>
}

function App() {
  return (
    <Router>
      <Header/>
      <ul>
        <li><Link to="/custPage">Join Page</Link></li>
        <li><Link to="/mainPage">My Page</Link></li>
      </ul>
      <Routes>
        <Route path="/custPage" element={<JoinPage/>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
