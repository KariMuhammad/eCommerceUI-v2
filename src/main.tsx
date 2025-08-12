import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import ModalCard from "./components/Modals/Card";
import ModalProvider from "./providers/modal-provider";

const container = document.getElementById("root");
const root = createRoot(container!);


root.render(<Provider store={store}>
    <PersistGate persistor={persistor}>
        <ModalProvider>
            <Toaster position="top-center" richColors />
            <App />
            <ModalCard />
        </ModalProvider>
    </PersistGate>
</Provider>);
