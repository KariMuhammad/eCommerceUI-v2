import { createPortal } from "react-dom";

// Components
import Overlay from "../Overlay";

interface SidebarModalProps {
  children: React.ReactNode;
  showSidebar: boolean;
  onCloseSidebar: () => void;
}

const SidebarModal = ({
  children,
  showSidebar,
  onCloseSidebar,
}: SidebarModalProps) => {
  console.log("SidebarModal", showSidebar);

  return createPortal(
    <>
      <Overlay onCloseModal={onCloseSidebar} showSidebar={showSidebar} />
      {children}
    </>,
    document.getElementById("modal-root")!
  );
};

export default SidebarModal;
