import React, { useCallback, useState, useEffect } from "react";
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
  padding-left: 5px;
  margin-right: 0.5em;
`;
const ResultDate = styled.p`
  text-align: right;
`;

const Text2 = ({ year, month, date }) => {
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  const [inputValue, setInputValue] = useState();
  const handleDday = (e) => {
    if (!e.target.value) {
      setInputValue("");
      setResultDate(`yyyy년 mm월 dd일`);
      return;
    }
    setInputValue(e.target.value);
    printDate(e.target.value);
  };

  const printDate = useCallback(
    (value) => {
      if (value === undefined || value === "") {
        setResultDate("yyyy년 mm월 dd일");
        return;
      }
      const tempDate = new Date();
      tempDate.setFullYear(year);
      tempDate.setMonth(Number(month) - 1);
      tempDate.setDate(Number(date) - Number(value));
      setResultDate(
        `${tempDate.getFullYear()}년 ${
          Number(tempDate.getMonth()) + 1
        }월 ${tempDate.getDate()}일`
      );
    },
    [year, month, date]
  );

  useEffect(() => {
    printDate(inputValue);
  }, [inputValue, printDate]);

  return (
    <Wrapper>
      D-
      <Input type="text" value={inputValue} onChange={handleDday} />
      는?
      <ResultDate>{resultDate}</ResultDate>
    </Wrapper>
  );
};

export default Text2;
