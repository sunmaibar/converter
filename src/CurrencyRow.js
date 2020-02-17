import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    onChangeAmount,
    selectedCurrency,
    onChangeCurrency,
    amount
  } = props;
  return (
    <div>
      <input
        onChange={onChangeAmount}
        value={amount}
        className="input"
        type="number"
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
