import React, { lazy, Suspense } from "react";
import Fallback from "../components/FallBack";
const PageNotFound = lazy(() =>
    import("../views/pages/PageNotFound")
);

const ScreenLoginDashboard = lazy(() =>
    import("../components/Admin/Login/Login.js")
);

const ScreenDashboard = lazy(() => import("../views/pages/Dashboard"));

const HomePage = lazy(() => import("../views/pages/Home"));
const LoginPage = lazy(() => import("../views/pages/Login"));
const CardPage = lazy(() => import("../views/pages/ShoppingCard"))
const DetailPage = lazy(() => import("../views/pages/Detail/detail.js"))
const RegisterPage = lazy(() => import("../views/pages/Register"))

const index = [
    {
        path: "/admin/dashboard",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <ScreenDashboard />
            </Suspense>
        ),
    },
    // {
    //     path: "/dashboard",
    //     exact: true,
    //     main: () => (
    //         <Suspense key={index} fallback={<Fallback />}>
    //             <ScreenLoginDashboard />
    //         </Suspense>
    //     ),
    // },
    {
        path: "/dashboard",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <ScreenLoginDashboard />
            </Suspense>
        ),
    },
    {
        path: "/",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <HomePage />
            </Suspense>
        ),
    },
    {
        path: "/detail",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <DetailPage />
            </Suspense>
        ),
    },
    {
        path: "/Card",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <CardPage />
            </Suspense>
        ),
    },
    {
        path: "/login",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <LoginPage />
            </Suspense>
        ),
    },
    {
        path: "/register",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <RegisterPage />
            </Suspense>
        ),
    },
    {
        path: "",
        exact: true,
        main: () => (
            <Suspense key={index} fallback={<Fallback />}>
                <PageNotFound />
            </Suspense>
        ),
    },
];
export default index;
