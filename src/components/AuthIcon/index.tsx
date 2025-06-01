import { Link } from "react-router-dom";

export default function AuthIcon() {
  return (
    <div className="icon">
      <Link to={"/login"} className="d-flex align-items-center gap-2">
        <img src="images/user.svg" alt="icon-user" />
        <p className="mb-0">
          Login <br /> Account
        </p>
      </Link>
    </div>
  );
}
