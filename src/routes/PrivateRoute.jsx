import Uses from "../hooks/Uses";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} = Uses();
    const location = useLocation();
    
    if(loading){
        return <span className="lg:w-[200px] lg:h-[200px] lg:ml-[650px] w-[100px] h-[100px] md:ml-[200px] ml-[150px] loading loading-infinity"></span>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }

    // if(loading){
    //     return <span className="loading loading-infinity loading-lg"></span>
    // }

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