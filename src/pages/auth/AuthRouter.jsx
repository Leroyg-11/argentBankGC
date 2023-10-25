import React from "react";
import { Routes, Route } from "react-router";
import Login from "./Login";
import Error from "../public/Error";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;
