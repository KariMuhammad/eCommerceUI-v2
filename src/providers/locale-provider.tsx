import { LocaleSwitcher } from "@/constants/locales";
import LocaleContext from "@/context/locale-context";
import { useState } from "react";

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<LocaleSwitcher>({
    code: "us",
    name: "English",
    currency: "USD",
    currencySymbol: "$",
  });

  const state = {
    locale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  );
}
