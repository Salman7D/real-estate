import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/FirebasedProvider";
import { useForm } from "react-hook-form";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = data => {
        const { email, password } = data
        createUser(email, password)
            .then(result => {
                console.log(result);
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
          <input name="password" type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Already Have an account? <Link className="text-blue-600 font-bold" to="/login">
        Login
      </Link></p>
    </div>
    );
};

export default Register;