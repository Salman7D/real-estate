import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Uses from "../hooks/Uses";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

    const { createUser } = Uses();
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
        createUser(email, password)
            .then(result => {
                if(result.user){
                  toast.success("Success");
                    navigate(from);
                    
                }
        })
        .catch(error => {
          toast.error("Failed");
        })
        
    }; 
    

    return (
        <div>
            <h2 className="text-3xl mt-10 text-center">Please Register</h2>
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
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Already Have an account? <Link className="text-blue-600 font-bold" to="/login">
        Login
      </Link></p>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default Register;