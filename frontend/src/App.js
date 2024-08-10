import MainLayouts from "./components/MainLayouts";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PostPage} from "./PostPage";
import ErrorPage from "./components/ErrorPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <MainLayouts />, errorElement: <ErrorPage />},
    {path: "/Post", element: <PostPage />},
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
