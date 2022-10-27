import { Navigate, useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function RequireAuth({ children }) {
   const [{user}] = useStateValue();
   let location = useLocation();

   if (!user) {
     return <Navigate to="/about" state={{ from: location }} replace />
   }
 
   return children;
 }

 export default RequireAuth;