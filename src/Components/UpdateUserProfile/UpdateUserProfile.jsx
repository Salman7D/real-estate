import { useNavigate } from "react-router-dom";
import Uses from "../../hooks/Uses";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const UpdateUserProfile = () => {

    const {  user, updateUserProfile } = Uses();
    console.log(user);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        // console.log(name, img);

        updateUserProfile(name, image)
        .then(() => {
            toast.success("Success");
            navigate("/updateProfile")
        })
    }

    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>UpdateProfile - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div>
        <div className="bg-[#d7deec] rounded-lg flex justify-center lg:mt-0 mt-10 lg:mb-5 mb-5 items-center lg:h-[50px] h-[40px]">
            <h2 className="text-2xl font-bold">User Information</h2>
        </div>
            <div className="bg-[#F5F7FB] text-center lg:p-3 p-3 mb-10 lg:mb-10">
            <p className="font-medium">Name </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 mb-2 lg:mb-3 lg:ml-[745px]">

            </div>
            <p className="font-bold lg:mb-5 mb-5">{user.displayName}</p>

            <p className="font-medium">Email </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 mb-2 lg:ml-[745px]">

            </div>
            <p className="font-bold lg:mb-5 mb-5">{user?.email || "Not Found"}</p>

            <p className="font-medium">PhotoURL </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 mb-2 lg:mb-3 lg:ml-[745px]">

            </div>

            <p className="font-bold lg:mb-5 mb-5 lg:overflow-auto overflow-auto">{user.photoURL}</p>
            <div className="lg:ml-[700px] text-center">
            <img className="lg:h-[100px] lg:w-[100px] md:ml-80 lg:ml-0 ml-36 h-[100px] w-[100px] rounded-full" src={user?.photoURL || "https://i.ibb.co/LJftcB7/userIcon.png"} alt="" />
            </div>
            
            </div>
            
            
        </div>

<div>
        <div className="bg-[#d7deec] rounded-lg lg:mb-5 mb-5 flex justify-center items-center lg:h-[50px] h-[40px]">
            <h2 className="text-2xl font-bold">Update or Edit Profile</h2>
        </div>
<div data-aos="zoom-down" data-aos-duration="1500" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ccd4e4] lg:mb-10 lg:ml-[560px] md:ml-48 ml-5 mb-10">
              <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Full Name</span>
                      </label>
                      <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                  </div>
                  
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Image Url</span>
                      </label>
                      <input type="text" placeholder="image url" className="input input-bordered" name='image' />
                  </div>
                  
                  <div className="form-control mt-6 p-0">
                      <button className="btn btn-ghost bg-[#687389] text-white" type='submit'>Save Changes</button>
                  </div>
                  </form>
  </div>
</div>
<ToastContainer></ToastContainer>
</div>
    );
};

export default UpdateUserProfile;