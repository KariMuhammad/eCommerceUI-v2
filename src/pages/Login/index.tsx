import { Breadcrump } from "@/components";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="">
      <div aria-label="breadcrump" className="">
        <Breadcrump
          links={[
            { name: "Home", link: "/" },
            { name: "Login", link: "/login", active: true },
          ]}
        />
      </div>

      <h2 className="text-xl w-fit text-center font-bold mb-4 mx-auto px-3 py-1 border border-blue-700">Sign in</h2>

      <div aria-label="login-content" className="max-w-xl mx-auto ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
