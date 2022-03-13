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
