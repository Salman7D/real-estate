import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";
import Uses from "../hooks/Uses";
import { useNavigate, useLocation } from "react-router-dom";


const Login = () => {
    const {signInUser} = Uses();


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
          <input name="password" type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}

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
    </div>
  
    );
};

export default Login;