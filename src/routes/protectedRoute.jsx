import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // change later (login logic)

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;