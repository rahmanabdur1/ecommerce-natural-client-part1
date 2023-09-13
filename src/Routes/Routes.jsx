import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import MenuItem from "../Pages/MenuItem/MenuItem";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                element:<Category/>
            },
            {
                path:'/menuItem/:id',
                element:<MenuItem/>
            }
        ]
    }
])