import React, { useEffect, useState } from "react";
import CurrencyService from "../../services/currencyService";

import { InputCurrency, RatesContainer, SelectRate } from "./styles";

interface RatesProps {
  rate: string;
  value: number;
}
const Home: React.FC = () => {
  const [rates, setRates] = useState<RatesProps[]>();
  const [currency, setCurrency] = useState(1.0);
  const [origin, setOrigin] = useState(0.0);
  const [destination, setDestination] = useState(0.0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadRates() {
      const rat = await CurrencyService.loadRates();
      setRates(rat);
      setLoading(false);
    }
    loadRates();
  }, []);

  useEffect(() => {}, [origin]);

  const handleFormatOptions = () => {
    if (!loading && rates) {
      return rates
        .sort(function (a, b) {
          if (a.rate < b.rate) {
            return -1;
          }
          if (a.rate > b.rate) {
            return 1;
          }
          return 0;
        })
        .map((rate) => <option value={rate.value}>{rate.rate}</option>);
    }
  };
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <InputCurrency
        type="number"
        value={currency}
        onChange={(e) => {
          setCurrency(parseFloat(e.target.value));
        }}
      />
      <RatesContainer>
        <SelectRate
          name="origin"
          value={origin}
          onChange={(e) => {
            setOrigin(parseFloat(e.target.value));
          }}
        >
          {handleFormatOptions()}
        </SelectRate>
        <SelectRate
          name="destination"
          value={destination}
          onChange={(e) => {
            setDestination(parseFloat(e.target.value));
          }}
        >
          {handleFormatOptions()}
        </SelectRate>
      </RatesContainer>

      <div className="">
        {currency} * {origin} * {destination} = {currency * origin}
      </div>
    </div>
  );
};

export default Home;
