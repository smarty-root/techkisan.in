import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp.jsx";
import Home from "./components/LandingPage/Home.jsx";
import AutomationServices from "./components/Services/AutomationServices.jsx";
import SecurityServicesPage from "./components/Services/SecurityServicesPage.jsx";
import ITServicesPage from "./components/Services/ITServicesPage.jsx";
import SolarServicesPage from "./components/Services/SolarServicesPage.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ProductListing from "./components/Ecom/ProductListing/ProductListing.jsx";
import Cart from "./components/Ecom/Cart/Cart.jsx";
import ProductPage from "./components/Ecom/IndividualProduct/ProductPage.jsx";
import PlaceOrder from "./components/Ecom/Placeorder/PlaceOrder.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Tickets from "./components/Tickets/Tickets.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <SignInSignUp /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/tickets", element: <Tickets /> },

      // Services routes
      {
        path: "services",
        children: [
          { path: "automation", element: <AutomationServices /> },
          { path: "it", element: <ITServicesPage /> },
          { path: "security", element: <SecurityServicesPage /> },
          { path: "solar", element: <SolarServicesPage /> },
        ],
      },

      // Store routes
      {
        path: "store",
        children: [
          { path: "", element: <ProductListing /> },        
          { path: "cart", element: <Cart /> },             
          { path: "product", element: <ProductPage /> },    
          { path: "placeorder", element: <PlaceOrder /> },   
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
