import { lazy, Suspense } from "react";
import { Splash } from "./pages/Splash";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./components/PublicRoutes";
import { PrivateRoutes } from "./components/PrivateRoutes";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
