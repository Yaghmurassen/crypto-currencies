import crypto from "./crypto.json";

const cleanCrypto = () => {
  return crypto;
};

const getChange = async () => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=BTC,ETH,DASH,BAT,USDC,?574118c5f672db0aab26e80c1bcc49504afeb903d3ae01b47a762c007affad33"
  );
  const change = await response.json();
  return change;
};

export { cleanCrypto, getChange };
