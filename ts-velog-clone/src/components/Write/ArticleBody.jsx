import React from "react";
import styled from "styled-components";

const ArticleBody = ({ body, onDataChange }) => {
  return (
    <Textarea
      value={body}
      placeholder="당신의 이야기를 적어보세요..."
      onChange={(e) => onDataChange("body", e.target.value)}
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
