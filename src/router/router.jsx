import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../ErrorPage/ErrorPage";
import Login from "../Pages/AuthenticationPages/Login";
import Home from "../Pages/HomePages/Home";
import Register from "../Pages/AuthenticationPages/Register";
import AllServices from "../Pages/All services/AllServices";
import ProtectedRouter from "./ProtectedRouter";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddService from "../Pages/Add service/AddService";
import MyPostedService from "../Pages/My Posted Service/MyPostedService";
import MyPostedReview from "../Pages/My Posted Review/MyPostedReview";

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
                path:'addService',
                element:<ProtectedRouter><AddService></AddService></ProtectedRouter>
            },
            {
                path:'myServices',
                element:<ProtectedRouter><MyPostedService></MyPostedService></ProtectedRouter>
            },
            {
                path:'myReviews',
                element:<ProtectedRouter><MyPostedReview></MyPostedReview></ProtectedRouter>
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