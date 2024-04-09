import Uses from "../hooks/Uses";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = Uses();
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;