import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";

const Login = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { user, login } = useContext(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((res) => {console.log(res.email);navigate(state? state : "/")})
      .catch((e) => console.log(e.message));

      
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      {console.log(typeof state, " : ", state)}
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center mt-4 text-4xl font-bold text-black">
          Login
        </h1>

        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            <label className="label">
              <Link to={"/register"}>
                <span className="label-text-alt link link-hover">
                  Don't Have An Account ?{" "}
                  <span className="text-red-500">Register</span>
                </span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
