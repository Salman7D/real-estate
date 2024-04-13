
import {useLoaderData} from "react-router-dom";
import SpecialityCard from "../SpecialityCard";
import Slider from "../Slider/Slider";

const Home = () => {
    const lists = useLoaderData()
    console.log(lists);
    return (
        <div className="overflow-hidden">
            <Slider></Slider>

            <div className="ml-4 flex lg:gap-2 lg:mt-16">
                <div className="bg-[#687389] w-4 h-14">

                </div>
                <div>
                    <p className="text-lg font-medium">RECENT</p>
                    <p className="text-[#687389] text-2xl font-bold">PROPERTIES</p>
                </div>
            </div>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:ml-40 lg:mt-10 lg:mb-10">
                {
                    lists.map(aList => <SpecialityCard key={aList.id} lists={aList}></SpecialityCard>)
                }
                
            </div>
        </div>
    );
};

export default Home;