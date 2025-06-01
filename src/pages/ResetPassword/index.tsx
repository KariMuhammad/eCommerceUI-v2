import { Link } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";

import { Breadcrump } from "@/components";
const ResetPassword = () => {
  return (
    <div className="pg-reset-password">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { name: "Home", url: "/" },
            { name: "Reset Password", url: "/reset-password" },
          ]}
        />
      </div>

      <div className="pg-content">
        <div className="container-xxl">
          <div className="auth-card">
            <div className="reset-password">
              <h2>Reset Password</h2>
              <p className="text-muted mb-3">
                Enter your email address below and we'll send you a link to
                reset your password.
              </p>

              <form>
                <div className="form-control">
                  <input type="email" placeholder="Email" />
                </div>
              </form>

              <div className="buttons">
                <button className="active">Reset Password</button>
                <Link to="/login" className="text-center">
                  <BsArrowBarLeft /> Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
