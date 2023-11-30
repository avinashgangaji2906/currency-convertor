import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // passing empty obj, when access data using loop so it wont crash
  useEffect(() => {
    // making api call
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // converting response into json
      .then((res) => setData(res[currency])); // accessing currency from res
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo; // exporting custom hook so when hook is used
// then  data can be accessed
