
import {useLoaderData} from "react-router-dom";
import SpecialityCard from "../SpecialityCard";
import Slider from "../Slider/Slider";

const Home = () => {
    const lists = useLoaderData()
    console.log(lists);
    return (
        <div className="overflow-hidden">
            <Slider></Slider>
            
            <div className="grid grid-cols-2 lg:gap-10 lg:ml-40 lg:mt-10">
                {
                    lists.map(aList => <SpecialityCard key={aList.id} lists={aList}></SpecialityCard>)
                }
                
            </div>
        </div>
    );
};

export default Home;