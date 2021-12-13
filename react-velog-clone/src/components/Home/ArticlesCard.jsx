import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageWrapper from "../common/ImageWrapper";
import { Tags } from "../Write/ArticleTags";
import { Tag } from "../Write/ArticleTags";

const ArticlesCard = ({ article }) => {
  const { id, title, summary, tags, thumbnail, date } = article;
  return (
    <Article>
      <Link to={`article/${id}`} state={article}>
        <ImageWrapper ratio="56%">
          <Img src={thumbnail} alt="이미지" />
        </ImageWrapper>
        <H3>{title}</H3>
      </Link>
      <H4>{summary}</H4>
      <CustomTags>
        {tags.map((tag) => (
          <CustomTag key={`tag-${tag}`}>{tag}</CustomTag>
        ))}
      </CustomTags>
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
  border-radius: 0.25rem;
`;

const H3 = styled.h3`
  margin-top: 1rem;
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

const CustomTags = styled(Tags)`
  justify-content: end;
`;

const CustomTag = styled(Tag)`
  height: 1.5rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  margin: 0 0 0 0.5rem;
  &:hover {
    cursor: default;
  }
`;

const Date = styled.p`
  color: var(--main-gray-color);
  font-size: 0.75rem;
`;

export default ArticlesCard;
