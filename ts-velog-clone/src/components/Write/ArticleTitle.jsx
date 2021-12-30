import React from "react";
import styled from "styled-components";

const ArticleTitle = ({ title, onDataChange }) => {
  return (
    <StInput
      value={title}
      placeholder="제목을 입력하세요"
      onChange={(e) => onDataChange("title", e.target.value)}
    ></StInput>
  );
};

const StInput = styled.input`
  width: 100%;
  font-size: 2.75rem;
  line-height: 1.5;
  font-weight: 700;
  color: rgb(33, 37, 41);
`;

export default ArticleTitle;
