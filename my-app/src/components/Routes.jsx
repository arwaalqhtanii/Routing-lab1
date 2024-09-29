import { Routes, Route } from "react-router-dom";
import CampInfo from "../pages/CampInfo";
import Register from "./Register";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<CampInfo />} />
    <Route path="/camp-info" element={<CampInfo />} />
    <Route path="/register" element={<Register />} />

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);
};

export default AppRoutes;


