import Uses from "../hooks/Uses";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


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

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute;