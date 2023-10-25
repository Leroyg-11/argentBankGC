import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./pages/public/PublicRoute";
import AdminRouter from "./pages/admin/AdminRouter";
import Layout from "./components/layout/Layout";
import AuthRouter from "../src/pages/auth/AuthRouter";
import Home from "./pages/public/Home";
import AuthGuard from "./_helpers/AuthGuard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/*" element={<PublicRoute />} />
            <Route
              path="/admin/*"
              element={
                <AuthGuard>
                  <AdminRouter />
                </AuthGuard>
              }
            />
            <Route path="/auth/*" element={<AuthRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
