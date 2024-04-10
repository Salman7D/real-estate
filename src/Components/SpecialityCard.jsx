import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const SpecialityCard = ({lists}) => {
    const {segment_name, estate_title, price, description, status, area, location, image, id} = lists;
    return (
        <div data-aos="fade-left" data-aos-duration="1500">
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{segment_name}</a>
                    </div>
                    <Link className="bg-purple-600 rounded-lg text-white text-lg font-semibold btn btn-ghost" to={`/lists/${id}`}>View Properties</Link>
                </div>
                <div className="space-y-4">
                    <img className="h-[30px] w-[30px]" src={image} alt="" />
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex justify-between items-center text-xs">
                            
                                <span>{price}</span>
                                <p>{status}</p>
                            
                        </div>
                            
                        <div className="flex justify-between items-center text-xs">
                            
                                <span>{area}</span>
                                <p>{location}</p>
                            
                        </div>
                            
                    </div>
                    <p className='mb-1 text-[#282828] text-lg font-medium'>Facilities: {lists.facilities.length}</p>
                    <ul className='mb-4 text-[#878787] text-lg font-normal'>
                        {lists.facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                        ))}
                        </ul>

                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">{description}</p>
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