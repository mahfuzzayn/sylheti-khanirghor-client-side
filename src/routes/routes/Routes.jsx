import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blog from "../../pages/Home/Blog/Blog";
import Login from "../../pages/Home/Login/Login";
import Register from "../../pages/Home/Register/Register";
import ChefRecipes from "../../pages/Home/ChefRecipes/ChefRecipes";
import ErrorPage from "../../pages/Home/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserDetails from "../../pages/Home/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/chefs/:id",
                element: (
                    <PrivateRoute>
                        <ChefRecipes></ChefRecipes>
                    </PrivateRoute>
                ),
            },
            {
                path: "/user-details/:localId",
                element: (
                    <PrivateRoute>
                        <UserDetails></UserDetails>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;
