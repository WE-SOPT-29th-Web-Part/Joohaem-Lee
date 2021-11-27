import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  const { id, title, summary, tags, thumbnail, date } = article;
  return (
    <Article>
      <Link to={`article/${id}`} state={article}>
        <Img src={thumbnail} alt="이미지" />
        <H3>{title}</H3>
      </Link>
      <H4>{summary}</H4>
      <TagsWrapper>
        {tags.map((tag) => (
          <Tag key={`tag-${tag}`}>{tag}</Tag>
        ))}
      </TagsWrapper>
      <Date>{date}</Date>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 2rem 0;
  border-bottom: 2px solid var(--main-lightgray-color);
  text-align: right;
  line-height: 1.5rem;
  & > * {
    margin: 0.75rem 0;
  }
`;

const Img = styled.img`
  width: 40%;
  margin: auto auto 0.75rem;
  border-radius: 0.25rem;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const H4 = styled.h4`
  font-weight: 400;
  /* 넘어가는 텍스트 숨기기 */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;

const TagsWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.75rem;
  border-radius: 1rem;
  background: rgb(241, 243, 245);
  font-size: 0.75rem;
  color: rgb(12, 166, 120);
  margin-left: 0.5rem;
`;

const Date = styled.p`
  color: var(--main-gray-color);
  font-size: 0.75rem;
`;

export default ArticlesCard;
