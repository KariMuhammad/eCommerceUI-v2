import { ModalSizes } from "@/types";
import React, { createContext, useState } from "react";

type ModalInfoType = {
    title: string;
    children: React.ReactNode;
    size: ModalSizes;
}

type ModalContextType = ModalInfoType & {
    isOpen: boolean;
    openModal: (props: ModalInfoType) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
    isOpen: false,
    title: "",
    children: <></>,
    size: ModalSizes.md,
    closeModal: () => { },
    openModal: (props: ModalInfoType) => { },
})

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState<ModalInfoType>({ title: "", children: <></>, size: ModalSizes.md })

    const openModal = (props: ModalInfoType) => {
        setInfo(props)
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const { title, children: modalChildren, size } = info;

    return (
        <ModalContext.Provider value={{ isOpen, size, title, children: modalChildren, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;