/* eslint-disable react-refresh/only-export-components */
import {Suspense, lazy, ComponentType, FC} from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";
import SidebarLayout from "./layouts/SidebarLayout";
import BaseLayout from "./layouts/BaseLayout";
import SuspenseLoader from "./components/SuspenseLoader";
const Loader = (Component: ComponentType): FC => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const Overview = Loader(lazy(() => import("./views/overview/Index")));
// auth
const Login = Loader(lazy(() => import("./views/auth/Login")));
const Register = Loader(lazy(() => import("./views/auth/Register")));
const ForgotPassword = Loader(
  lazy(() => import("./views/auth/ForgotPassword"))
);

// dashboard
const Home = Loader(lazy(() => import("./views/dashboard/home")));
const Personal = Loader(lazy(() => import("./views/dashboard/personal")));
const Education = Loader(lazy(() => import("./views/dashboard/education")));
const Employment = Loader(lazy(() => import("./views/dashboard/employment")));
const Membership = Loader(lazy(() => import("./views/dashboard/membership")));
const Reference = Loader(lazy(() => import("./views/dashboard/reference")));
const Portfolio = Loader(lazy(() => import("./views/dashboard/portfolio")));



const Status404 = Loader(lazy(() => import("./views/errors/Status404")));
const Status500 = Loader(lazy(() => import("./views/errors/Status500")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Status404 />,
          },
          {
            path: "500",
            element: <Status500 />,
          },
        ],
      },
      {
        path: "*",
        element: <Status404 />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      
      {
        path:'personal-info',
        element:<Personal/>
      },
      {
        path:'education',
        element:<Education />
      },
      {
        path:'employment',
        element:<Employment />
      },
      {
        path:'membership',
        element:<Membership />
      },
      {
        path:'reference',
        element:<Reference />
      },
      {
        path:'portfolio',
        element:<Portfolio />
      }
     
    ],
  },
];

export default routes;
