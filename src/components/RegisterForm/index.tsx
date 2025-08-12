import { CreateUserRequest, ModalSizes } from "@/types";
import Input from "../shared/Input";
import { Field, Form, Formik } from "formik";
import { SignupSchema } from "@/validations";
import ErrorMessage from "../shared/ErrorMessage";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { CgSpinner } from "react-icons/cg";
import useModal from "@/hooks/use-modal";

import LoginForm from "../LoginForm";
export default function RegisterForm() {
  const { closeModal, openModal } = useModal();

  const [registerNewUser, { isLoading }] = useRegisterMutation();

  const initialState: CreateUserRequest = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: undefined
  }


  return (
    <div aria-label="register-form">
      <Formik
        initialValues={initialState}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log("Data Sent", values)
          registerNewUser(values).then(d => {
            toast.success("Successfully registered!");
            closeModal();
            openModal({ title: "Sign in", children: <LoginForm />, size: ModalSizes.sm })
          }).catch(error => {
            console.error(error)
            toast.error("Failed to register new user!");
          })
        }}
      >
        {
          ({ errors, touched }) => (

            <Form>
              <Field
                type="text"
                id="first-name"
                name="first_name"
                placeholder="First Name"
                label="First Name"
                required
                as={Input}
              />
              {errors.first_name && touched.first_name && (
                <ErrorMessage message={errors.first_name} />
              )}

              <Field
                type="text"
                id="last-name"
                name="last_name"
                placeholder="Last Name"
                label="Last Name"
                required
                as={Input}
              />
              {errors.last_name && touched.last_name && (
                <ErrorMessage message={errors.last_name} />
              )}

              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                label="Email Address"
                required
                as={Input}
              />
              {errors.email && touched.email && (
                <ErrorMessage message={errors.email} />
              )}

              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                label="Password"
                as={Input}
                required
              />
              {errors.password && touched.password && (
                <ErrorMessage message={errors.password} />
              )}

              <Field
                type="password"
                id="password"
                name="confirmPassword"
                placeholder="Password"
                label="Password"
                as={Input}
                required
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorMessage message={errors.confirmPassword} />
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isLoading ? <CgSpinner /> : "Register"}
              </button>
            </Form>
          )

        }
      </Formik>

      <div className="mt-4 text-sm text-gray-600">
        <p>
          <a href="/register" className="text-indigo-600 hover:underline">
            You have an account ? Login
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
