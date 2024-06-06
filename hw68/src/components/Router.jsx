import {useRoutes} from "react-router-dom";
import Header from "./Header";
import All from "../pages/All";
import MyFavourites from "../pages/MyFavourites";
import Popular from "../pages/Popular";
import PostDetail from "./PostDetail";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Header/>,
            children: [
                {
                    path: 'posts',
                    element: <All/>,
                },
                {
                    path: 'posts/:id',
                    element: <PostDetail/>,
                },
                {
                    path: 'myFavourites',
                    element: <MyFavourites/>,
                },
                {
                    path: 'popular',
                    element: <Popular/>,
                },
            ]
        },
    ]);
}