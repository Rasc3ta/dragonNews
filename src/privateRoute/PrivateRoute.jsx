import React, { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const {pathname} = useLocation();

//   console.log( pathname);

  if (loading) {
    return (
      <div>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={pathname} to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
