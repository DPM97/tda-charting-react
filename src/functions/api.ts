import axios from "axios";

export const getCandle = async (symbol: string) => {
  const now = Math.floor(new Date().getTime() / 1000);
  let start: number | Date = new Date();
  start.setFullYear(start.getFullYear() - 1);
  start = Math.floor(start.getTime() / 1000);

  let res = { data: null };
  if (symbol.length === 4) {
    res = await axios.get(
      `https://finnhub.io/api/v1/stock/candle?symbol=${symbol.toLocaleUpperCase()}&resolution=60&from=${start}&to=${now}&token=${
        process.env.REACT_APP_API_KEY
      }`
    );
  }

  console.log(res.data);
  return res.data;
};
