import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/home"));
const AboutUs = lazy(() => import("../pages/about-us"));
const ContactUs = lazy(() => import("../pages/contact-us"));
// const FAQ = lazy(() => import("pages/FAQ"));
// const Solutions = lazy(() => import("pages/Solutions"));
// const PrivacyPolicy = lazy(() => import("pages/PrivacyPolicy"));
// const CookiesPolicy = lazy(() => import("pages/CookiesPolicy"));
// const TermsAndConditions = lazy(() => import("pages/TermsAndConditions"));

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ErrorPage />,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      // {
      //   path: "/faq",
      //   element: <FAQ />,
      // },
      // {
      //   path: "/solutions",
      //   element: <Solutions />,
      // },
      // {
      //   path: "/privacy-policy",
      //   element: <PrivacyPolicy />,
      // },
      // {
      //   path: "/cookies-policy",
      //   element: <CookiesPolicy />,
      // },
      // {
      //   path: "/terms-conditions",
      //   element: <TermsAndConditions />,
      // },
    ],
  },
]);

export { router };
