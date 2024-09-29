

import { Routes, Route } from "react-router-dom";
import CampInfo from "../pages/CampInfo";
import Register from "./Register";
import ErrorPage from "../pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <CampInfo />,
  },
  {
    path: "/camp-info",
    element: <CampInfo />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
