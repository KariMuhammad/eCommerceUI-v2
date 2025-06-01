import { cn } from "@/utils";

interface OverlayProps {
  onCloseModal: () => void;
  showSidebar: boolean;
}

const Overlay = ({ onCloseModal, showSidebar }: OverlayProps) => {
  return (
    <div
      className={cn({
        "transition-all absolute inset-0 z-30 bg-black bg-opacity-50": true,
        "invisible opacity-0": !showSidebar,
        "visible opacity-100": showSidebar,
      })}
      onClick={onCloseModal}
    ></div>
  );
};

export default Overlay;
