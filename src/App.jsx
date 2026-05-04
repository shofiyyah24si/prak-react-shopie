import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/main/Dashboard"))
const Orders = React.lazy(() => import("./pages/main/Orders"))
const NotFound = React.lazy(() => import("./pages/main/NotFound"))
const Customers = React.lazy(() => import("./pages/main/Customers"))
const Produk = React.lazy(() => import("./pages/main/Produk"))
const ProductDetail = React.lazy(() => import("./pages/main/ProductDetail"))
const Error400 = React.lazy(() => import("./pages/main/Error400"))
const Error401 = React.lazy(() => import("./pages/main/Error401"))
const Error403 = React.lazy(() => import("./pages/main/Error403"))

const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))

const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

const Loading = React.lazy(() => import("./components/Loading"))

export default function App() {

  return (
    <Suspense fallback={<Loading />}>
    
          <Routes>
            <Route element={<MainLayout/>} >
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/products/:id" element={<ProductDetail />} />
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
