import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JoinPage from "./page/Join.page.tsx";
import MainPage from "./page/Main.page.tsx";
import LoginPage from "./page/Login.page.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

import DefalutLayout from "./components/layouts/DefaultLayout";
import MyPage from "./page/My.page";

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <DefalutLayout>
            <Routes>
              <Route path="/joinPage" element={<JoinPage />} />
              <Route path="/mainPage" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/myPage" element={<MyPage />} />
            </Routes>
          </DefalutLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
