import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../ErrorPage/ErrorPage";
import Login from "../Pages/AuthenticationPages/Login";
import Home from "../Pages/HomePages/Home";
import Register from "../Pages/AuthenticationPages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])
export default router