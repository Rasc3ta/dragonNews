import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import FullNews from "../full_news/FullNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <Login></Login>
        ),
      },
      {
        path: "/register",
        element: (
          <Register></Register>
        ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <FullNews></FullNews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
