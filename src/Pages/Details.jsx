// import { useLocation } from 'react-router-dom';
import {useParams, useLoaderData} from "react-router-dom";

const Details = () => {
    
    // const location = useLocation();
    // const {description} = location.state;
    const cards = useLoaderData();
    const {id} = useParams();
    // const idInt = parseInt(id);
    const card = cards.find(card => card.id === id);
    
    return (
        <div className="lg:ml-[100px] lg:mb-10">
              <div className=" lg:w-[900px] lg:ml-[200px]">
            <div className="flex justify-between">
                <div className="lg:p-3">
                    <p className="text-lg font-semibold">#{card.segment_name}</p>
                <h2 className="text-3xl font-bold">{card.estate_title}</h2>
                <p className="text-lg font-medium">{card.location}</p>
                </div>

                <div>
                <p className="lg:p-3 text-[#687389] text-lg font-semibold">{card.price}</p>
                </div>
            </div>

            <div className="bg-[#F5F7FB] rounded-xl lg:mt-10 lg:p-3">
                <h2 className="text-lg font-medium">Description</h2>
                <div className="bg-[#687389] lg:w-10 lg:h-1 lg:mb-5">

                </div>
                <p>{card.description}</p>
            </div>

            <div className="bg-[#F5F7FB] lg:mt-10 lg:p-3">
                <h2 className="text-lg font-medium">Property Details</h2>
                <div className="bg-[#687389] rounded-xl lg:w-10 lg:h-1 lg:mb-5">

                </div>

                <div className="flex justify-center lg:gap-3">
                    <p> <span className="font-bold">Status:</span>  {card.status}</p>
                    <p><span className="font-bold">Area:</span>  {card.area}</p>
                    </div>
                    <div className="text-center lg:mt-10">
                    <p className='mb-1 text-[#282828] text-lg font-medium'><span className="font-bold"> Facilities:</span> {card.facilities.length}</p>
                     <ul className='mb-4 text-[#878787] text-lg font-normal'>
                        {card.facilities.map((facility, index) => (
                         <li key={index}>{facility}</li>
                         ))}
                         </ul>
                    </div>
                    
                
            </div>
            
            
            
        </div>
        </div>
       
    );
};

export default Details;