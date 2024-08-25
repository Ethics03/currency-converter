import React from 'react';
import {useState,useEffect} from 'react'

function InputBox(
  { label, 
    amount, 
    onAmountChange,
    onCurrencyChange, 
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    className = "",
   }) 
  
  {

  
  return (
    <div className={`bg-white p-2 rounded-lg text-sm flex ${className}`}>
      <div className="flex w-1-2 ml-1">
        <label className="text-black mb-2 inline-block ">{label}</label>
        <input   

          type="number"
          value = {amount}
          className="outline-none w-full  py-0.5 mt-4 bg-gray-100 rounded-lg "
          placeholder="Amount"
          disabled = {amountDisabled}
          onChange={(e) => {onAmountChange(Number(e.target.value))}}
          
          
          
            />
        <div className="w-1-2 flex flex-wrap justify-end text-right">
          <p className=" flex text-black/40 mb-2 w-full ">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            onChange={(e) => { onCurrencyChange(e.target.value)}}
             
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox; 