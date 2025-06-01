import { Link } from "react-router-dom";
import { Breadcrump } from "@/components";

import { BsArrowBarRight } from "react-icons/bs";

const Register = () => {
  return (
    <div className="pg-register">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { name: "Home", link: "/" },
            { name: "Register", link: "/register" },
          ]}
        />
      </div>

      <div className="register-content">
        <div className="container-xxl">
          <div className="auth-card">
            <h2>Register an account</h2>
            <form className="" action="">
              <div className="form-control">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <Link to="/forgot-password" className="bg-opacity-25">
                Forgot Password?
              </Link>

              <div className="buttons">
                <button className="active" type="submit">
                  Register
                </button>
                <Link to="/login" className="sbg-opacity-25">
                  Login <BsArrowBarRight />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
