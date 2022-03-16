import React, { lazy, Suspense } from "react";
import Fallback from "../components/FallBack";
const PageNotFound = lazy(() =>
    import("../views/pages/PageNotFound")
);
const ScreenDashboard = lazy(() => import("../views/pages/Dashboard"));
const ScreenLoginDashboard = lazy(() =>
    import("../views/pages/Dashboard/Login")
);
const HomePage = lazy(() => import("../views/pages/Home"));
const LoginPage = lazy(() => import("../views/pages/Login"));
const CardPage = lazy(() => import("../views/pages/ShoppingCard"))
const DetailPage = lazy(() => import("../views/pages/Detail/detail.js"))

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
