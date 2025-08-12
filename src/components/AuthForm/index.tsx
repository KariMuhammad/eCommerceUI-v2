import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import Box from "../shared/Box";
import Tabs from "../shared/Tabs";

export default function AuthForm() {
  return (
    <div aria-label="auth-form" className="font-rubik">
      <Box className="w-full">
        <Tabs tabs={["Login", "Register"]}>
          <LoginForm />
          <RegisterForm />
        </Tabs>
      </Box>
    </div>
  );
}
