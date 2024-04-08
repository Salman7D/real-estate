import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/FirebasedProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    console.log(createUser);
    return (
        <div>
            <h2 className="text-3xl mt-10 text-center">Please Register</h2>
      <form className="card-body lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input name="photourl" type="text" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          
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