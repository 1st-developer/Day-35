import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/homePage";
import MainRouter from "./pages/mainPage";
import About from "./pages/aboutPage";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Technology from "./pages/technology";
import Help from "./pages/help";
import ProductContent from "./Contents/product.content"
import News from "./Contents/news"
import Versions from "./Contents/versions"
import TopCells from "./Contents/top.cells"
import Work from "./Contents/work"
import Settings from "./Contents/settings"
import Account from "./Contents/account"
import Navigations from "./Contents/navigations"

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
          children: [
            {
              path: "product",
              element: <ProductContent />
            },
            {
              path: "news",
              element: <News />
            },
            {
              path: "versions",
              element: <Versions />
            },
            {
              path: "top cells",
              element: <TopCells />
            },
            {
              path: "work",
              element: <Work />
            },
            {
              path: "settings",
              element: <Settings />
            },
            {
              path: "account",
              element: <Account />
            },
            {
              path: "navigations",
              element: <Navigations />
            },
          ]
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
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterProviderComponent;