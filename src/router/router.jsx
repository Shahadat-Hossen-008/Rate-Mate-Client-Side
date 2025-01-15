import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../ErrorPage/ErrorPage";
import Login from "../Pages/AuthenticationPages/Login";
import Home from "../Pages/HomePages/Home";
import Register from "../Pages/AuthenticationPages/Register";
import AllServices from "../Pages/All services/AllServices";
import ProtectedRouter from "./ProtectedRouter";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

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
                path:'allServices',
                element:<AllServices></AllServices>
            },
            {
                path:'allServices/:id',
                element:<ProtectedRouter><ServiceDetails></ServiceDetails></ProtectedRouter>,
                loader:({params})=> fetch(`http://localhost:5000/all-services/${params.id}`)
                
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