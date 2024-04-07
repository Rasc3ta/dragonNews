import { useContext } from "react";
import { Link } from "react-router-dom";

import { authContext } from "../authProvider/AuthProvider";

const Register = () => {
  const { user, register } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    register(email, password)
      .then((res) =>{ console.log(res.email);})
      .catch((e) => console.log(e.message));
    
      
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center mt-4 text-4xl font-bold text-black">
          Register
        </h1>

        <form onSubmit={handleRegister} className="card-body">
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
              <Link to={"/login"}>
                <span className="label-text-alt link link-hover">
                  Have An Account ? <span className="text-red-500">login</span>
                </span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
