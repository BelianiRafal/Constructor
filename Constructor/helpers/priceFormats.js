import { normalize } from "./normalizePrice.js";

const currencies = {
  euro: "€",
  swissFranc: "Fr.",
  poundSterling: "£",
  hungarianForint: "Ft",
  swedishKrona: ":-",
  danishKrona: "kr.",
  czechKrona: "Kč",
  norwegianKrone: ",-",
  polandZloty: ",-",
  romanianLeu: "lei"
};
const relativePriceFormat = {
  DE: {
    currency: currencies.euro,
  },
  CH: {
    currency: currencies.swissFranc,
  },
  AT: {
    currency: currencies.euro,
  },
  FR: {
    currency: currencies.euro,
  },
  BE: {
    currency: currencies.euro,
  },
  IT: {
    currency: currencies.euro,
  },
  UK: {
    currency: currencies.poundSterling,
  },
  ES: {
    currency: currencies.euro,
  },
  PT: {
    currency: currencies.euro,
  },
  PL: {
    currency: currencies.polandZloty,
  },
  HU: {
    currency: currencies.hungarianForint,
  },
  NL: {
    currency: currencies.euro,
  },
  SE: {
    currency: currencies.swedishKrona,
  },
  DK: {
    currency: currencies.danishKrona,
  },
  CZ: {
    currency: currencies.czechKrona,
  },
  FI: {
    currency: currencies.euro,
  },
  NO: {
    currency: currencies.norwegianKrone,
  },
  SK: {
    currency: currencies.euro,
  },
    RO: {
    currency: currencies.romanianLeu,
  },
};
const priceFormats = {
  DE: (price, options) => {
    return normalize(price, "DE", options) + " " + relativePriceFormat.DE.currency;
  },
  CHDE: (price, options) => {
    return normalize(price, "CHDE", options) + " " + relativePriceFormat.CH.currency;
  },
  AT: (price, options) => {
    return normalize(price, "AT", options) + " " + relativePriceFormat.AT.currency;
  },
  FR: (price, options) => {
    return normalize(price, "FR", options) + " " + relativePriceFormat.FR.currency;
  },
  BE: (price, options) => {
    return normalize(price, "BE", options) + " " + relativePriceFormat.BE.currency;
  },
  IT: (price, options) => {
    return normalize(price, "IT", options) + " " + relativePriceFormat.IT.currency;
  },
  UK: (price, options) => {
    return relativePriceFormat.UK.currency + normalize(price, "UK", options);
  },
  ES: (price, options) => {
    return normalize(price, "ES", options) + " " + relativePriceFormat.ES.currency;
  },
  PT: (price, options) => {
    return normalize(price, "PT", options) + " " + relativePriceFormat.PT.currency;
  },
  PL: (price, options) => {
    return normalize(price, "PL", options) + relativePriceFormat.PL.currency;
  },
  HU: (price, options) => {
    return normalize(price, "HU", options) + " " + relativePriceFormat.HU.currency;
  },
  NL: (price, options) => {
    return relativePriceFormat.NL.currency + " " + normalize(price, "NL", options);
  },
  SE: (price, options) => {
    return normalize(price, "SE", options) + relativePriceFormat.SE.currency;
  },
  DK: (price, options) => {
    return normalize(price, "DK", options) + " " + relativePriceFormat.DK.currency;
  },
  CZ: (price, options) => {
    return normalize(price, "CZ", options) + " " + relativePriceFormat.CZ.currency;
  },
  FI: (price, options) => {
    return normalize(price, "FI", options) + " " + relativePriceFormat.FI.currency;
  },
  NO: (price, options) => {
    return normalize(price, "NO", options) + relativePriceFormat.NO.currency;
  },
  SK: (price, options) => {
    return normalize(price, "SK", options) + " " + relativePriceFormat.SK.currency;
  },
  RO: (price, options) => {
    return normalize(price, "RO", options) + " " + relativePriceFormat.RO.currency;
  },
};


export {
    priceFormats,
}
