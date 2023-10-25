import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
  const getToken = useSelector((state) => state.user.user);
  if (!getToken) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default AuthGuard;
