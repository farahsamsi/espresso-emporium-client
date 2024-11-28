import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import AddNewCoffee from "../Pages/AddNewCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddNewCoffee></AddNewCoffee>
            },
            {
                path: "/coffeeDetails",
                element: <CoffeeDetails></CoffeeDetails>
            }
        ]
    },

]);

export default Router;