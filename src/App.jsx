import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./pages/main/Dashboard"))
import Orders from "./pages/main/Orders";
import Customers from "./pages/main/Customers";
import NotFound from "./pages/main/NotFound";
import Error400 from "./pages/main/Error400";
import Error401 from "./pages/main/Error401";
import Error403 from "./pages/main/Error403";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Loading from "./components/Loading";

export default function App() {

  return (
    <Suspense fallback={<Loading />}>

    
          <Routes>
            <Route element={<MainLayout/>} >
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/error400" element={<Error400 />} />
              <Route path="/error401" element={<Error401 />} />
              <Route path="/error403" element={<Error403 />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route element={<AuthLayout/>}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/forgot" element={<Forgot/>} />
            </Route>

          </Routes>

    </Suspense>
  );
}
