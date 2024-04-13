import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Uses from "../hooks/Uses";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const { createUser, updateUserProfile } = Uses();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      // navigation system
    const navigate = useNavigate()
    
    const from = "/";
    
      const onSubmit = data => {
        const { email, password, fullName, image } = data
        
        // create user update and profile
        createUser(email, password)
            .then(() => {
              navigate(from);
              updateUserProfile(fullName, image)
                .then(() => {

                  // navigate(from);
                    
                
              });
                
        });
        
        
    }; 
    

    return (
        <div>
            <h2 className="text-3xl mt-10 text-center text-[#687389]">Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="your name" className="input input-bordered" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input name="photourl" type="text" placeholder="PhotoURL" className="input input-bordered" {...register("image", { required: true })} />
          {errors.image && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative mb-4">
            <input  name="password" 
            type={ showPassword ? "text" : "password" } 
            placeholder="password" className="input input-bordered w-full py-2 px-4" {...register("password", { required: "This field is required", pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
              message: "Must be an Uppercase, a Lowercase and Length must 6 characters",
            }, })} />
            {errors.password && errors.password.message}
            
            
            <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
        <button className="bg-[#687389] rounded-lg text-white text-lg font-semibold btn btn-ghost">Register</button>
        </div>
      </form>
      <p className="text-center lg:mb-10">Already Have an account? <Link className="text-[#687389] font-bold" to="/login">
        Login
      </Link></p>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default Register;