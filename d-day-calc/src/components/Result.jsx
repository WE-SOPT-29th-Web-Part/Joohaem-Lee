import React from "react";
import styled from "styled-components";
import Text1 from "./Text1";
import Text2 from "./Text2";

const Section = styled.section`
  margin: 3em 0;
`;

const Result = ({ year, month, date }) => {
  return (
    <Section>
      <Text1 year={year} month={month} date={date} />
      <Text2 year={year} month={month} date={date} />
    </Section>
  );
};

export default Result;
