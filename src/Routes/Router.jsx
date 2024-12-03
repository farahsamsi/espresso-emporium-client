import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import AddNewCoffee from "../Pages/AddNewCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Users from "../Pages/Users";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://coffee-store-server-nine-liart.vercel.app/coffees')
            },
            {
                path: '/addCoffee',
                element: <AddNewCoffee></AddNewCoffee>,
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`https://coffee-store-server-nine-liart.vercel.app/coffees/${params.id}`)
            },
            {
                path: "/coffeeDetails/:id",
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`https://coffee-store-server-nine-liart.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://coffee-store-server-nine-liart.vercel.app/users')
            }
        ]
    },

]);

export default Router;