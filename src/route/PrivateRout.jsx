import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { DotWave } from "@uiball/loaders";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className="flex">
    <p>Loading</p>

    <DotWave size={47} speed={1} color="black" />
  </div>;
  }

  if (user?.email) {
    return children;
  }
  return (
    Swal.fire({
        title: "Login please!",
        text: "You need to login first",
        icon: "warning",
        imageWidth: 400,
        imageHeight: 200,
      }),
      <Navigate state={{ from: location }} to="/login" replace></Navigate>
  
  );
};

export default PrivateRoute;
