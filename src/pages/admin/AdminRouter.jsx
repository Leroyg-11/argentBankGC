import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import UserEdit from "../../components/admin/UserEdit";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRouter;
