import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinPage from "./page/Join.page.tsx";
import MainPage from "./page/Main.page.tsx";

import Layout from "./components/layouts/Layout.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/custPage" element={<JoinPage />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
