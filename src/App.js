import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JoinPage from "./page/Join.page.tsx";
import MainPage from "./page/Main.page.tsx";

import DefalutLayout from "./components/layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <DefalutLayout>
        <Routes>
          <Route path="/joinPage" element={<JoinPage />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </DefalutLayout>
    </BrowserRouter>
  );
}

export default App;
