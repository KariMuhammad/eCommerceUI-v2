// TYPES
export interface LocaleMapSwitcher {
  [country: string]: {
    name: string;
    code: string;
    currency: string;
    currencySymbol: string;
  };
}

export interface LocaleSwitcher {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
}

// CONSTANTS
export const localesMap = {
  us: {
    code: "us",
    name: "English",
    currency: "USD",
    currencySymbol: "$",
  },
  fr: {
    code: "fr",
    name: "Français",
    currency: "EUR",
    currencySymbol: "FR",
  },
  es: {
    code: "es",
    name: "Español",
    currency: "EUR",
    currencySymbol: "",
  },

  eg: {
    code: "eg",
    name: "العربية",
    currency: "جنية",
    currencySymbol: "ج.د.",
  },
} as LocaleMapSwitcher;

const locales = [
  {
    code: "us",
    name: "English",
    currency: "USD",
    currencySymbol: "$",
  },
  {
    code: "fr",
    name: "Français",
    currency: "EUR",
    currencySymbol: "FR",
  },
  {
    code: "es",
    name: "Español",
    currency: "EUR",
    currencySymbol: "",
  },
  {
    code: "eg",
    name: "العربية",
    currency: "جنية",
    currencySymbol: "ج.د.",
  },
] as LocaleSwitcher[];

// EXPORTS
export default locales;

export const countryCodes = Object.keys(localesMap);
