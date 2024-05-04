import {Navigate} from "react-router-dom";
import { useContext , useEffect , useState} from "react";
import { AuthContext } from "../Provider/AuthProvider";
const PrivateRoute = ({children}) => {
  const {user  ,loading} = useContext(AuthContext);

  if(loading){
      return <progress className="progress w-56"></progress>
  }

  if(user?.email){
      return children
  }
  return <Navigate to="/login"replace></Navigate>
  return (
    <div>
      
    </div>
  );
};

export default PrivateRoute;