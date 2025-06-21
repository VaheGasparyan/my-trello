import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const SignIn = lazy(() => import('@pages/signIn'))

export const routes: RouteObject[] = [
    {
        path: '/login',
        element: <SignIn />
    }
]