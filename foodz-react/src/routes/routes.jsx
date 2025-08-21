
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from '../pages/Home.jsx';
import SingleRstaurant from "../pages/SingleRstaurant.jsx";
import AuthUser from "./protectedRout/AuthUser.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "user",
        element: <AuthUser />,

        children: [
          {
            path: "single-res/:id",
            element: <SingleRstaurant />
          }
        ]
      },


    ]
  },
]);