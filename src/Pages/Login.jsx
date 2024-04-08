import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/FirebasedProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";


const Login = () => {
    const {signInUser} = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = data => {
        const { email, password } = data
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
        })
        .catch(error => {
            console.log(error);
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
        <SocialLogin></SocialLogin>
      </form>
      <p className="text-center">New Here? <Link className="text-blue-600 font-bold" to="/register">
        Register
      </Link></p>
    </div>
  
    );
};

export default Login;