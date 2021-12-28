import React from "react";
import styled from "styled-components";

const PendingResult = () => {
  return <StCard>Pending...</StCard>;
};

export default PendingResult;

const StCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 1rem;
  background-color: rgb(44, 48, 53);
  width: 25rem;
  border-radius: 20px;
  position: relative;
`;
