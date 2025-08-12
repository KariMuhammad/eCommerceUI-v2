import { useLoginMutation } from "@/redux/features/auth/authApi";
import Input from "../shared/Input";
import { CgSpinner } from "react-icons/cg";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import useModal from "@/hooks/use-modal";

export default function LoginForm() {
  const { closeModal } = useModal();
  const [data, setData] = useState({ email: "", password: "" });

  const [login, { isLoading }] = useLoginMutation();

  const handleState = (key: string, value: string) => {
    setData(p => ({
      ...p,
      [key]: value
    }))
  }

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    console.log("Data", data);
    login({ email: data.email, password: data.password }).unwrap().then((d) => {
      console.log("Data", d);
      toast.success("Successful login");
      closeModal();
    }).catch(e => {
      console.error("Error =>", e);
      toast.error("Failed to login!")

    });
  }

  return (
    <div aria-label="login-form">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          className="my-2"
          type="email"
          id="email"
          placeholder="Email Address"
          name="email"
          onChange={(e) => handleState("email", e.target.value)}
          autoComplete="email"
          label="Email Address"
          required
        />

        <Input
          className="my-2"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleState("password", e.target.value)}
          autoComplete="current-password"
          label="Password"
          required
        />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isLoading ? <CgSpinner /> : "login"}
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          <a href="/register" className="text-indigo-600 hover:underline">
            Forgot your password ?
          </a>
        </p>
      </div>

      <div className="w-2/3 mt-4 text-xs mx-auto text-center text-gray-600">
        <p>
          New user discount applies only to full price items. By providing your
          email address, you agree to{" "}
          <span className="text-indigo-600">our Privacy Policy</span> and{" "}
          <span className="text-indigo-600">Terms of Service</span>.
        </p>
      </div>
    </div>
  );
}
