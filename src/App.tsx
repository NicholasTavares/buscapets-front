import { lazy, Suspense } from "react";
import { Splash } from "./pages/Splash";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./components/PublicRoutes";
import { PrivateRoutes } from "./components/PrivateRoutes";

const Home = lazy(() => import("./pages/Home"));
const Publish = lazy(() => import("./pages/Publish"));
const Publication = lazy(() => import("./pages/Publication"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/publish" element={<Publish />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/publication/:publication_id" element={<Publication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
