import { Link, NavLink } from "react-router-dom";
import Uses from "../../hooks/Uses";



const Navbar = () => {

    const { logOut, user } = Uses();

    const navlinks = <>
    <li><NavLink className={({isActive}) => 
      isActive ? "border border-solid border-[#687389] rounded-lg text-[#687389]" : "text-lg font-normal"
    } to="/">Home</NavLink></li>
    <li><NavLink className={({isActive}) => 
      isActive ? "border border-solid border-[#687389] rounded-lg text-[#687389]" : "text-lg font-normal"
    } to="/about">About</NavLink></li>
    <li><NavLink className={({isActive}) => 
      isActive ? "border border-solid border-[#687389] rounded-lg text-[#687389]" : "text-lg font-normal"
    } to="/contactUs">Contact US</NavLink></li>
    {user && <>
      <li><NavLink className={({isActive}) => 
      isActive ? "border border-solid border-[#687389] rounded-lg text-[#687389]" : "text-lg font-normal"
    } to="/userInformation">User Information</NavLink></li>
      <li><NavLink className={({isActive}) => 
      isActive ? "border border-solid border-[#687389] rounded-lg text-[#687389]" : "text-lg font-normal"
    } to="/updateUserProfile">Update Profile</NavLink></li>
    </>

    }
    </>
    return (
        <div className="navbar bg-base-100 lg:p-14">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">Skyline <span className="text-[#687389]">Residence</span> </Link>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  
  <div className="navbar-end">
    {
        user? 
              <div className="flex justify-center lg:gap-5">
                <div className="w-10 rounded-full">
                  <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <img alt="" src={user?.photoURL || "https://i.ibb.co/hM5rH7g/batman-arkham-knight-mystery-door-1d-1920x1080.jpg"} />
                  </div>  
                </div>
                <button className="bg-[#687389] rounded-lg text-white text-lg font-semibold btn btn-ghost" onClick={logOut}>LogOut</button>
                </div>
              
              :
              <Link to="/login">
              <button className="border border-[#687389]  rounded-lg text-[#687389] text-lg font-semibold btn btn-ghost">Login</button>
              </Link>
            
    }
        
  </div>
</div>
    );
};

export default Navbar;