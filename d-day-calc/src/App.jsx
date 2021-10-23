import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import DataInput from "./components/DataInput";
import CenterText from "./components/CenterText";
import Result from "./components/Result";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  width: 50%;
  padding: 2em;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  return (
    <Wrapper className="App">
      <Header />
      <DataInput
        year={year}
        month={month}
        date={date}
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
      />
      <CenterText />
      <Result year={year} month={month} date={date} />
      <Footer />
    </Wrapper>
  );
}

export default App;
