import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../ErrorPage/ErrorPage";
import Login from "../Pages/AuthenticationPages/Login";
import Home from "../Pages/HomePages/Home";

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
                path:'/login',
                element:<Login/>
            }
        ]
    }
])
export default router