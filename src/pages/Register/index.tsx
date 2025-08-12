import { Breadcrump } from "@/components";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <div className="pg-register">
      <div className="breadcrump">
        <Breadcrump
          links={[
            { name: "Home", link: "/" },
            { name: "Register", link: "/register", active: true },
          ]}
        />
      </div>

      <h2 className="text-xl w-fit text-center font-bold mb-4 mx-auto px-3 py-1 border border-blue-700">Register</h2>

      <div aria-label="login-content" className="max-w-xl mx-auto ">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
