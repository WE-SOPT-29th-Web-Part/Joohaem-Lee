import React from "react";
import styled from "styled-components";

const RejectedResult = () => {
  return <StCard>사용자가 없습니다.</StCard>;
};

export default RejectedResult;

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
  animation: slideDown 400ms ease-in 0s 1 normal forwards;
  @keyframes slideDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
