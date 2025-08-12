import { ModalContext } from "@/providers/modal-provider"
import { useContext } from "react"

const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("<useModal> only used within ModalProvider only!");
    }

    return context;
}

export default useModal;