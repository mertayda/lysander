import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";
import BlogPostPage from "./pages/Blog/BlogPostPage.jsx"; // Import the BlogPostPage component

// Root component that wraps everything with BlogProvider
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
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id", // Add this new route for individual blog posts
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
