import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
