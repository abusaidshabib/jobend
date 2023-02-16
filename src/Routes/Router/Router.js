import AboutUs from "../../Pages/AboutUs/AboutUs/AboutUs";
import ContactUs from "../../Pages/ContactUs/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import SingIn from "../../Pages/SignIn/SingIn";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/login",
        element: <SingIn></SingIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  }
])

export default router;