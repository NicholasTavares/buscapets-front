import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export const PrivateRoutes = () => {
  const { state } = useAuth();
  return state.auth ? <Outlet/> : <Navigate to="/signin"/>;
};

