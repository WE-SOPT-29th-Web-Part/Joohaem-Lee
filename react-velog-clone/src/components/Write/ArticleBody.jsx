import React from "react";
import styled from "styled-components";

const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.substring(0, 10);
      e.target.style.color = "red";
      return;
    }
    e.target.style.color = "inherit";
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value,
    }));
  };
  return (
    <Textarea
      placeholder="당신의 이야기를 적어보세요..."
      onChange={handleChange}
    ></Textarea>
  );
};

const Textarea = styled.textarea`
  all: unset;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  &::placeholder {
    font-style: italic;
  }
`;

export default ArticleBody;
