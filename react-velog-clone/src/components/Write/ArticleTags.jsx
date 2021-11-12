import React from "react";
import styled from "styled-components";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newTag = e.target.value;
      if (articleData.tags.includes(newTag)) return;
      if (newTag === "") return;
      // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, newTag],
      // }));
      // 비동기 -> 불변성 유지 필요
      const tempData = { ...articleData };
      tempData.tags = [...tempData.tags, newTag];
      setArticleData(tempData);
      e.target.value = "";
    }
  };

  const handleClick = (e) => {
    const tempData = { ...articleData };
    tempData.tags = tempData.tags.filter((tag) => tag !== e.target.innerText);
    setArticleData(tempData);
  };

  return (
    <Tags>
      {tags.map((tag, idx) => (
        <Tag key={`tag-${idx}`} onClick={handleClick}>
          {tag}
        </Tag>
      ))}
      <Input type="text" onKeyPress={handleKeyPress} />
    </Tags>
  );
};

const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 1rem;
  margin: 0 0.75rem 0.75rem 0;
  border-radius: 1rem;
  background: rgb(241, 243, 245);
  font-size: 1rem;
  color: rgb(12, 166, 120);
  transition: all 0.125s ease-in;
  &:hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  display: inline;
  min-width: 8rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  line-height: 2rem;
`;

export default ArticleTags;
