// import { useLocation } from 'react-router-dom';
import {useParams, useLoaderData} from "react-router-dom";

const Details = () => {
    
    // const location = useLocation();
    // const {description} = location.state;
    const books = useLoaderData();
    const {id} = useParams();
    // const idInt = parseInt(id);
    const book = books.find(book => book.id === id);
    
    return (
        <div>
            <p>{id}</p>
            <p>{book.description}</p>
            <p>{book.price}</p>
            
        </div>
    );
};

export default Details;