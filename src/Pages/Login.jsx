import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";
import Uses from "../hooks/Uses";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {signInUser} = Uses();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      // navigation system
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || "/";
    
      const onSubmit = data => {
        const { email, password } = data
        signInUser(email, password)
            .then(result => {
               if(result.user){
                toast.success("Success");
                navigate(from);
                
               }
        })
        
        
        
    }; 


    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
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
            placeholder="password" className="input input-bordered w-full py-2 px-4" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
            <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>

          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center lg:mt-6">New Here? <Link className="text-blue-600 font-bold" to="/register">
        Register
      </Link></p>
      <ToastContainer></ToastContainer>
    </div>
  
    );
};

export default Login;