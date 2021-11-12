import React from "react";
import styled from "styled-components";

const ArticleBody = ({ setArticleData }) => {
  const MAX_NUM = 150;

  const handleChange = (e) => {
    if (e.target.value.length > MAX_NUM) {
      e.target.value = e.target.value.substring(0, MAX_NUM);
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
  height: 10rem;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  overflow-wrap: break-word;
  &::placeholder {
    font-style: italic;
  }
`;

export default ArticleBody;
