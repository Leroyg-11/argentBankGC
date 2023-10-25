import React from "react";
import { Route, Routes } from "react-router";

import Home from "../public/Home";
import Error from "../public/Error";
const PublicRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PublicRoute;
