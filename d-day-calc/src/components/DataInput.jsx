import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 3em 0;
`;
const TodayBtn = styled.button`
  width: 30%;
  margin-bottom: 1em;
  border: 1px solid #08a600;
  background-color: #4ec53d;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  width: 10%;
  height: 2em;
  border: 1px solid #e4e4e4;
  padding-left: 10px;
  margin-right: 0.5em;
  :not(:first-child) {
    margin-left: 1em;
  }
`;

const DataInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };
  const toToday = () => {
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth() + 1);
    setDate(new Date().getDate());
  };

  return (
    <Section>
      <TodayBtn onClick={toToday}>오늘 날짜로</TodayBtn>
      <p>
        <Input
          type="text"
          onChange={(e) => handleChange(e, setYear)}
          value={year}
        />
        년
        <Input
          type="text"
          onChange={(e) => handleChange(e, setMonth)}
          value={month}
        />
        월
        <Input
          type="text"
          onChange={(e) => handleChange(e, setDate)}
          value={date}
        />
        일을 기준으로
      </p>
    </Section>
  );
};

export default DataInput;
