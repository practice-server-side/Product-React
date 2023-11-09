import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JoinPage from "./page/Join.page.tsx";
import MainPage from "./page/Main.page.tsx";
import LoginPage from "./page/Login.page.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

import DefalutLayout from "./components/layouts/DefaultLayout";
import MyPage from "./page/My.page";
import MyMallList from "./page/MyMallList.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefalutLayout />,
    children: [
      { path: "mainPage", element: <MainPage /> },
      { path: "joinPage", element: <JoinPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "myPage", element: <MyPage /> },
      { path: "myPage/mall", element: <MyMallList /> }
    ]
  }
]);

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
