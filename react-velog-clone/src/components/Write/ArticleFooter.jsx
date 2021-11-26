import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ArticleFooter = ({ setIsPublished }) => {
  return (
    <Section>
      <BLink to="..">
        <BIcon className="material-icons">arrow_back</BIcon>
        뒤로
      </BLink>
      <Button onClick={() => setIsPublished(true)}>출간하기</Button>
    </Section>
  );
};

const Section = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4rem;
  padding: 0 2rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const BLink = styled(Link)`
  width: 6rem;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  &:hover {
    background-color: var(--main-lightgray-color);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BIcon = styled.span`
  margin-right: 5px;
`;

const Button = styled.button`
  width: 6rem;
  height: 2.5rem;
  background-color: var(--main-green-color);
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  &:hover {
    font-weight: 700;
  }
`;

export default ArticleFooter;
