import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,

    }
])
export default router