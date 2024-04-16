// import { useLocation } from 'react-router-dom';
import {useParams, useLoaderData} from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { Helmet } from "react-helmet";

const Details = () => {
    
    // const location = useLocation();
    // const {description} = location.state;
    const cards = useLoaderData();
    const {id} = useParams();
    // const idInt = parseInt(id);
    const card = cards.find(card => card.id === id);
    
    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Details - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="lg:ml-[100px] lg:mb-10">
              <div className=" lg:w-[900px]  lg:mt-0 mt-10 lg:ml-[200px]">
            <div className="flex justify-between bg-[#F5F7FB] mb-5 lg:mb-10 rounded-xl">
                <div className="lg:p-3 p-3">
                    <p className="text-lg font-semibold lg:mb-3 mb-3"># <span className="text-[#687389]">{card.segment_name}</span></p>
                <h2 className="text-3xl font-bold lg:mb-2 mb-3">{card.estate_title}</h2>
                <p className="text-lg font-medium flex lg:gap-2 lg:mb-3"><ImLocation2 className="lg:h-[24px] lg:w-[24px]"></ImLocation2>{card.location}</p>
                </div>
                <div>
                <p className="lg:p-3 p-3 text-[#687389] text-lg font-semibold">{card.price}</p>
                </div>
            </div>
 
                <div>
                    <img className="lg:h-[500px] lg:w-[900px] md:w-[745px] md:h-[400px] lg:ml-0 ml-3 w-[400px] h-[200px] rounded-xl" src={card.image} alt="" />
                </div>

            <div className="bg-[#F5F7FB] rounded-xl lg:mt-10 mt-5 p-3 lg:p-3">
                <h2 className="text-lg font-medium">Description</h2>
                <div className="bg-[#687389] lg:w-10 lg:h-1 mb-3 lg:mb-5">
 
                </div>
                <p>{card.description}</p>
            </div>

            <div className="bg-[#F5F7FB] lg:mb-0 mb-5 lg:mt-10 mt-5 p-3 lg:p-3 rounded-xl">
                <h2 className="text-lg font-medium">Property Details</h2>
                <div className="bg-[#687389] rounded-xl lg:w-10 lg:h-1 mb-5 lg:mb-5">

                </div>

                <div className="flex justify-center lg:gap-3 gap-5">
                    <p> <span className="font-bold">Status:</span>  {card.status}</p>
                    <p><span className="font-bold">Area:</span>  {card.area}</p>
                    </div>
                    <div className="text-center lg:mt-10 mt-5">
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
        </div>
       
    );
};

export default Details;