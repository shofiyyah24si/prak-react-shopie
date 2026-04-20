import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className={`fixed z-30 md:static transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
          <Sidebar />
        </div>

        <div id="main-content" className="flex-1 p-4 md:ml-0">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/error400" element={<Error400 />} />
            <Route path="/error401" element={<Error401 />} />
            <Route path="/error403" element={<Error403 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}
