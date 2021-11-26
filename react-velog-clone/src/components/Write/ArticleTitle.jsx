import React from "react";
import styled from "styled-components";

const ArticleTitle = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      title: e.target.value,
    }));
  };
  return (
    <Input placeholder="제목을 입력하세요" onChange={handleChange}></Input>
  );
};

const Input = styled.input`
  width: 100%;
  font-size: 2.75rem;
  line-height: 1.5;
  font-weight: 700;
  color: rgb(33, 37, 41);
`;

export default ArticleTitle;
