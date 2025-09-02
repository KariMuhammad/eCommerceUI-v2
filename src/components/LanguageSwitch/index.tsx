import { useContext, useState } from "react";
import languages, { LocaleSwitcher } from "@/constants/locales";
import { cn } from "@/utils";

import { CgArrowDown } from "react-icons/cg";
import CountryIcon from "../shared/CountryIcon";
import LocaleContext from "@/context/locale-context";

export default function LanguageSwitch() {
  const { locale, setLocale } = useContext(LocaleContext);

  const [currentLocale, setCurrentLocale] = useState<LocaleSwitcher>(locale);
  const [listLanguages, setListLanguages] = useState(false);

  console.log(currentLocale);

  const handleChangeLocale = (lang: LocaleSwitcher) => {
    setLocale(lang);
    setCurrentLocale(lang);
    setListLanguages(false);
  };

  return (
    <div aria-label="languages-options " className="relative">
      <button
        className="border-none outline-none flex items-center gap-1 p-2 rounded-md" //bg-black text-white
        onClick={() => setListLanguages((p) => !p)}
      >
        <CountryIcon
          sizes="18x16"
          code={currentLocale.code}
          text={currentLocale.name}
          svg
        />
        {currentLocale.name}
        <CgArrowDown className="text-md" color="black" />
      </button>

      <ul
        className={cn({
          "transition-all absolute left-0 w-fit my-3 bg-black text-white": true,
          "invisible opacity-0 top-1/2": !listLanguages,
          "visible opacity-100 top-full": listLanguages,
        })}
      >
        {/* to make animation, you should render element event if you don't want show them in initial time. */}
        {languages.map((lang) => (
          <li
            className="py-2 px-3 flex items-center gap-1 cursor-pointer hover:bg-slate-700"
            key={lang.code}
            onClick={() => handleChangeLocale(lang)}
          >
            <CountryIcon sizes="18x16" code={lang.code} text={lang.name} svg />
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
