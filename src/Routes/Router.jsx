import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Strategy from "../Pages/Strategy";
import Services from "../Pages/Services";
import Solutions from "../Pages/Solutions";
import Root from "../Root";
import ContactUs from "../Pages/ContactUs";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/Solutions",
        element: <Solutions />,
      },

      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Strategy",
        element: <Strategy />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
