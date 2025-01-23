import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
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