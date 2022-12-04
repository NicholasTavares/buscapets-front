import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PublicRoutes = () => {
  const { state } = useAuth();
  return !state.auth ? <Outlet/> : <Navigate to="/"/>;
}

