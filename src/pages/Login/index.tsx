import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";

import { Breadcrump } from "@/components";

const Login = () => {
  return (
    <div className="pg-login">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { name: "Home", link: "/" },
            { name: "Login", link: "/login" },
          ]}
        />
      </div>

      <div className="login-content">
        <div className="container-xxl">
          <div className="auth-card">
            <h2>Login</h2>
            <form className="" action="">
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
                  Login
                </button>
                <Link to="/register" className="sbg-opacity-25">
                  Register <BsArrowBarRight />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
