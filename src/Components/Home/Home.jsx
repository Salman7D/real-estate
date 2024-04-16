
import {useLoaderData} from "react-router-dom";
import SpecialityCard from "../SpecialityCard";
import Slider from "../Slider/Slider";
import { Helmet } from "react-helmet";

const Home = () => {
    const lists = useLoaderData()
    console.log(lists);
    return (

        <div className="overflow-hidden">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Slider></Slider>

            <div className="lg:mb-0 mb-10 ml-4 mt-10 flex lg:gap-2 gap-2 lg:mt-16 lg:ml-28">
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