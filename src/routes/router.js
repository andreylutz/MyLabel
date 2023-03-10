import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import AboutMe from "../pages/AboutMe";
import MySkills from "../pages/MySkills";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about_me",
        element: <AboutMe />,
      },
      {
        path: "/my_skills",
        element: <MySkills />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
