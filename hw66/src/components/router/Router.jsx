import { useRoutes, Navigate } from "react-router-dom";
import Header from "../header/Header";
import Home from "../../pages/home/Home";
import Registration from "../../pages/registration/Registration";
import Login from "../../pages/login/Login";
import Success from "../../pages/success/Success";
import Error from "../../pages/error/Error";
import Main from "../../pages/main/Main";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Header/>,
            children: [
                {
                    path: "registration",
                    element: <Registration/>,
                },
                {
                    path: "login",
                    element: <Login/>,
                },
                {
                    path: "success",
                    element: <Success/>,
                },
                {
                    path: "home",
                    element: <Home/>,
                },
                {
                    path: "404",
                    element: <Error/>,
                },
                {
                    path: "main",
                    element: <Main/>,
                },
                {
                    path: "*",
                    element: <Navigate to="/404"/>
                }
            ],
        },
    ]);
}