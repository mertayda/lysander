import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";
import BlogPostPage from "./pages/Blog/BlogPostPage.jsx";
import Aegis from "./pages/Aegis/Aegis.jsx";
import Ecosystem from "./pages/Ecosystem/Ecosystem.jsx";
import Developer from "./pages/Developers/Developer.jsx";

const Root = () => (
  <BlogProvider>
    <Outlet />
  </BlogProvider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aegis",
        element: <Aegis />,
      },
      {
        path: "/ecosystem",
        element: <Ecosystem />,
      },
      {
        path: "/developers",
        element: <Developer />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogPostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
