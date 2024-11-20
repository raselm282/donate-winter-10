import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'animate.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./Pages/MainLayouts";
import Home from "./Pages/Home";
import DonationCampaigns from "./Pages/DonationCampaigns";
import HowToHelp from "./Pages/HowToHelp";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DonationDetails from "./Pages/DonationDetails";
import ErrorPage from "./Components/ErrorPage";
import AuthProvider from "./AuthProvider/AuthProvider";
import PrivateRoute from "./AuthProvider/PrivateRoute";
import UpdateProfile from "./Pages/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Donate-winter.json"),
      },
      {
        path: "/donationCampaigns",
        element: <DonationCampaigns></DonationCampaigns>,
        loader: () => fetch("../Donate-winter.json"),
      },
      {
        path: "/howToHelp",
        element: <HowToHelp></HowToHelp>,
        loader: () => fetch("../How-to-help.json"),
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
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
        path: "/donationDetails/:id",
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`../Donate-winter.json`),

        // *****another system*****
        // loader: async({params})=>{
        //   const res = await fetch("/Donate-winter.json")
        //   const data = await res.json()
        //   const singleData = data.find(d=>d.id == params.id)
        //   return singleData
        // }
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  
  </StrictMode>
);
