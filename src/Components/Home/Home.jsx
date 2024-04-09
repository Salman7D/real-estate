
import {useLoaderData} from "react-router-dom";
import SpecialityCard from "../SpecialityCard";

const Home = () => {
    const lists = useLoaderData()
    console.log(lists);
    return (
        <div className="grid grid-cols-2 lg:gap-10 lg:ml-40">
            {
                lists.map(aList => <SpecialityCard key={aList.id} lists={aList}></SpecialityCard>)
            }
            
        </div>
    );
};

export default Home;