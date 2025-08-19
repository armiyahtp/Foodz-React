
import {createBrowserRouter} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from '../pages/Home.jsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children : [
        {
            path: "/",
            element: <Home />
        }
    ]
  },
]);