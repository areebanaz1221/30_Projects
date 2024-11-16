
"use client";

import React, { useEffect, useState } from "react";

interface Currency {
  code: string;
  name: string;
  rate: number;
}

const CurrencyConverter: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await response.json();
      const rates = Object.keys(data.rates).map((code) => ({
        code,
        name: code,
        rate: data.rates[code],
      }));
      setCurrencies(rates);
    };

    fetchCurrencies();
  }, []);

  const convertCurrency = () => {
    const fromRate = currencies.find((currency) => currency.code === fromCurrency)?.rate || 0;
    const toRate = currencies.find((currency) => currency.code === toCurrency)?.rate || 0;
    const conversionRate = toRate / fromRate;
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
      <div className="mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-2"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={convertCurrency}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
      {convertedAmount > 0 && (
        <h3 className="text-xl font-semibold mt-6">
          Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
        </h3>
      )}
    </div>
  );
};

export default CurrencyConverter;
