import { lazy, Suspense } from "react";
import { Splash } from "./pages/Splash";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Publish = lazy(() => import("./pages/Publish"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="publish" element={<Publish />} />
      </Routes>
    </Suspense>
  );
};

export default App;
