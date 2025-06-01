import { LocaleSwitcher } from "@/constants/locales";
import { createContext } from "react";

interface LocaleContextType {
  locale: LocaleSwitcher;
  setLocale: React.Dispatch<React.SetStateAction<LocaleSwitcher>>;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: {
    code: "us",
    name: "English",
    currency: "USD",
    currencySymbol: "$",
  },

  setLocale: () => {},
});

export default LocaleContext;
