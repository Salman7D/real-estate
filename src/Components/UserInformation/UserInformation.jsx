import Uses from "../../hooks/Uses";


const UserInformation = () => {

    const {  user } = Uses();
    console.log(user);
    return (
        <div>

            <div className="bg-[#F5F7FB] text-center lg:p-3">
            <p className="font-medium">Name </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 lg:ml-[745px]">

            </div>
            <p className="font-bold lg:mb-5">{user.displayName}</p>

            <p className="font-medium">Email </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 lg:ml-[745px]">

            </div>
            <p className="font-bold lg:mb-5">{user?.email || "Not Found"}</p>

            <p className="font-medium">PhotoURL </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 lg:ml-[745px]">

            </div>

            <p className="font-bold lg:mb-5">{user.photoURL}</p>
            <div className="lg:ml-[715px]">
            <img src={user.photoURL} alt="" />
            </div>
            
            </div>
            
            
        </div>
    );
};

export default UserInformation;