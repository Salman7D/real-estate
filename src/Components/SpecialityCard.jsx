import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { ImLocation2 } from "react-icons/im";



const SpecialityCard = ({lists}) => {
    const {segment_name, estate_title, price, status, area, location, image, id} = lists;
    return (
        
<div data-aos="fade-left" data-aos-duration="1500">
<div className="card w-96 bg-[#dbdee2] shadow-xl lg:ml-10">
    <figure><img className="lg:h-[200px] lg:w-[320px] rounded-xl lg:mt-5" src={image} alt="" /></figure>
    
    <div className="card-body">
        <h1><span className="font-bold"># </span>{segment_name}</h1>
        <h2 className="card-title">{estate_title}</h2>
        <div className="flex justify-between lg:gap-3">
           <p className="flex justify-center lg:gap-2 lg:mr-5"><ImLocation2 className="lg:w-[20px] lg:h-[20px]"></ImLocation2> {location}</p>
           <p><span className="font-bold">Price:</span>  {price}</p>  
        </div>

        <div className="flex justify-between">
           <p><span className="font-bold">Status:</span> {status}</p>
           <p><span className="font-bold">Area:</span>  {area}</p>  
        </div>
        
        <p className='mb-1 text-[#282828] text-lg font-medium lg:mt-3'>Facilities: {lists.facilities.length}</p>
                     <ul className='mb-4 text-[#878787] text-lg font-normal'>
                        {lists.facilities.map((facility, index) => (
                         <li key={index}>{facility}</li>
                         ))}
                         </ul>

        <div className="card-actions justify-end">
        <Link className="bg-[#687389] rounded-lg text-white text-lg font-semibold btn btn-ghost" to={`/lists/${id}`}>View Properties</Link>
        </div>
    </div>
</div>
</div>

    );
};

SpecialityCard.propTypes = {
    lists:PropTypes.object
}


export default SpecialityCard;