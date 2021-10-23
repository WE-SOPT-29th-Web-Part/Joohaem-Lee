import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 50%;
  margin: 0 auto;
  text-align: left;
`;
const Input = styled.input`
  width: 10%;
  height: 2em;
  border: 1px solid #e4e4e4;
  padding-left: 10px;
  margin-right: 0.5em;
`;
const ResultDate = styled.p`
  text-align: right;
`;

const Text1 = ({ year, month, date }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");

  const printDate = (value) => {
    const tempDate = new Date();
    tempDate.setFullYear(year);
    tempDate.setMonth(Number(month) - 1);
    tempDate.setDate(Number(date) + Number(value) - 1);

    const result = `${tempDate.getFullYear()}년 ${
      tempDate.getMonth() + 1
    }월 ${tempDate.getDate()}일`;
    setResultDate(result);
  };

  const handleDday = (e) => {
    setInputValue(e.target.value);
    printDate(e.target.value);
  };

  useEffect(() => {
    printDate(inputValue);
  }, [year, month, date]);

  return (
    <Wrapper>
      <Input type="text" onChange={handleDday} />일 째 되는 날은?
      <ResultDate>{resultDate}</ResultDate>
    </Wrapper>
  );
};

export default Text1;
