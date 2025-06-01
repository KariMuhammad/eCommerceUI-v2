import { useContext, useState } from "react";
import CountryIcon from "../shared/CountryIcon";
import LocaleContext from "@/context/locale-context";
import { cn } from "@/utils";
import { countryCodes, localesMap, LocaleSwitcher } from "@/constants/locales";

export default function CurrencySwitch() {
  const { locale } = useContext(LocaleContext);
  const [currentCurrency, setCurrentCurrency] = useState(locale);

  const [listCurrencies, setListCurrencies] = useState(false);
  const toggleListCurrencies = () => setListCurrencies((p) => !p);

  const handleChangeCurrency = (locale: LocaleSwitcher) => {
    setCurrentCurrency(locale);
    // Update other states as needed, such as currency exchange rates or currency conversion rates
    // setLocale({ ...locale, currency });
  };

  return (
    <div aria-label="currency-options" className="relative z-[99999]">
      <button
        className="border-none outline-none flex items-center gap-1 py-2 px-4 rounded-md" // bg-black text-white
        onClick={toggleListCurrencies}
      >
        <CountryIcon
          sizes="18x16"
          code={currentCurrency.code}
          text={currentCurrency.name}
          svg
        />
        <span>
          {currentCurrency.currency} {currentCurrency.currencySymbol}
        </span>
      </button>
      <ul
        className={cn({
          "transition-all absolute top-0 bg-black text-white w-fit my-3": true,
          "invisible opacity-0": !listCurrencies,
          "visible opacity-100 top-full": listCurrencies,
        })}
      >
        {countryCodes.map((countryCode, indx) => {
          console.log(localesMap[countryCode]);
          return (
            <li key={`${localesMap[countryCode].currency}-${indx}`}>
              <button
                className="py-2 px-3 flex items-center gap-1 cursor-pointer hover:bg-slate-700"
                onClick={() => handleChangeCurrency(localesMap[countryCode])}
              >
                <CountryIcon
                  key={localesMap[countryCode].code}
                  code={localesMap[countryCode].code}
                  text={localesMap[countryCode].name}
                  sizes="16x18"
                  svg
                />

                {localesMap[countryCode].currency}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
