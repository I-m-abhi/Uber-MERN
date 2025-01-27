import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import UserHome from "./pages/UserHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/riding",
      element: <Riding />
    },
    {
      path: "/start",
      element: <UserProtectWrapper>
        <UserHome />
      </UserProtectWrapper>
    },
    {
      path: "/captain-home",
      element: <CaptainProtectWrapper>
        <CaptainHome />
      </CaptainProtectWrapper >
    },
    {
      path: "/user/logout",
      element: <UserProtectWrapper>
        <UserLogout />
      </UserProtectWrapper>
    },
    {
      path: "/captain/logout",
      element: <CaptainProtectWrapper>
        <CaptainLogout />
      </CaptainProtectWrapper>
    },
    {
      path: "/login",
      element: <UserLogin />
    },
    {
      path: "/signup",
      element: <UserSignup />
    },
    {
      path: "/captain-login",
      element: <CaptainLogin />
    },
    {
      path: "/captain-signup",
      element: <CaptainSignup />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
};

export default App;