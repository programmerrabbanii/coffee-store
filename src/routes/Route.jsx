import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch('../categories.json'),
                children:[
                    {
                        path:"/category/:category",
                        element:<CoffeeCard></CoffeeCard>,
                        loader:()=> fetch('../coffee.json'),

                    }
                ]
            },

            {
                path:"/coffee",
                element:<Coffees></Coffees>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
])
export default routes