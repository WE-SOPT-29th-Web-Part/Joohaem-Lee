import React, { useState, useEffect } from "react";

const Text1 = ({
  year,
  month,
  date
}) => {
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");

  const printDate = (value) => {
    const tempDate = new Date();
    tempDate.setFullYear(year);
    tempDate.setMonth(Number(month) - 1);
    tempDate.setDate(Number(date) + Number(value) - 1);

    const result = `${tempDate.getFullYear()}년 ${tempDate.getMonth() + 1}월 ${tempDate.getDate()}일`;
    setResultDate(result);
  };

  const handleDday = e => {
    setInputValue(e.target.value);
    printDate(e.target.value);
  };

  useEffect(() => {
    printDate(inputValue);
  }, [year, month, date]);

  return (
    <div>
      <div>
        <input type="text" onChange={ handleDday }/>일 째 되는 날은?
      </div>
      <div>{ resultDate }</div>
    </div>
  )
}

export default Text1;