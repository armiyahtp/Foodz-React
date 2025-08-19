
import {createBrowserRouter} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from '../pages/Home.jsx';
import SingleRstaurant from "../pages/SingleRstaurant.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children : [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "single-res/:id",
            element: <SingleRstaurant />
        }
    ]
  },
]);