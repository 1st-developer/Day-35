import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/homePage";
import MainRouter from "./pages/mainPage";
import About from "./pages/aboutPage";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Technology from "./pages/technology";
import Help from "./pages/help";

const RouterProviderComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRouter toggleMenu={toggleMenu} />,
      children: [
        {
          path: "/",
          element: <HomePage isMenuVisible={isMenuVisible} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/technology",
          element: <Technology />,
        },
        {
          path: "/help",
          element: <Help />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterProviderComponent;