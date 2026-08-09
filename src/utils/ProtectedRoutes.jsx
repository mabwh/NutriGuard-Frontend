import { Navigate, Outlet } from "react-router-dom";
import { authStore } from "../store/auth";

export default function ProtectedRoutes() {
  const accessToken = authStore((state) => state.accessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
}
