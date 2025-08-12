import useModal from "@/hooks/use-modal"
import AuthForm from "../AuthForm";
import { BiUser } from "react-icons/bi";
import { ModalSizes } from "@/types";

export default function AuthIcon() {
  const { openModal } = useModal();

  const openAuthFormModal = () => {
    openModal({
      title: "Sign in",
      children: <AuthForm />,
      size: ModalSizes.xl
    })
  };

  return (
    <div
      className="icon flex items-center gap-2 cursor-pointer"
      onClick={openAuthFormModal}
    >
      <BiUser className="text-2xl text-white" />
      <p className="mb-0">
        Login <br /> Account
      </p>
    </div>
  );
}
