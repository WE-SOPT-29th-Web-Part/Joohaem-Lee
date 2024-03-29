import React, { useState } from "react";
import styled from "styled-components";

const PublishSummary = ({ summary, onDataChange }) => {
  const MAX_NUM = 150;
  const [textCnt, setTextCnt] = useState(0);

  const handleChange = (e) => {
    const target = e.target;
    setTextCnt(target.value.length);

    if (target.value.length > MAX_NUM) {
      target.value = target.value.substring(0, MAX_NUM);
      target.style.color = "red";
      setTextCnt(150);
      return;
    }

    setTextCnt(target.value.length);
    target.style.color = "inherit";
    onDataChange("summary", e.target.value);
  };

  return (
    <>
      <Textarea
        onChange={handleChange}
        placeholder="당신의 포스트를 짧게 소개해보세요."
        value={summary}
      />
      <TextCnt>{textCnt}/150</TextCnt>
    </>
  );
};

export default PublishSummary;

const Textarea = styled.textarea`
  all: unset;
  width: 90%;
  height: 10rem;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: white;
  overflow-wrap: break-word;
`;

const TextCnt = styled.p`
  color: var(--main-gray-color);
  font-size: 0.75rem;
  text-align: right;
  margin-top: 0.5rem;
`;
