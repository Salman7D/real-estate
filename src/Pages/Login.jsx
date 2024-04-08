import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form className="card-body lg:w-1/2 md:w-3/4 mx-auto">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">New Here? <Link className="text-blue-600 font-bold" to="/register">
        Register
      </Link></p>
    </div>
  
    );
};

export default Login;