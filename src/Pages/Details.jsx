// import { useLocation } from 'react-router-dom';
import {useParams} from "react-router-dom";

const Details = () => {
    
    // const location = useLocation();
    // const {description} = location.state;
    const {id} = useParams();
    
    return (
        <div>
            <p>{id}</p>
            {/* <p>{description}</p> */}
            
        </div>
    );
};

export default Details;