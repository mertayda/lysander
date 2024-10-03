import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
