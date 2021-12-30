import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImageWrapper from "../components/common/ImageWrapper";
import Profile from "../components/Home/Profile";
import { Tags } from "../components/Write/ArticleTags";
import { Tag } from "../components/Write/ArticleTags";

const Article = () => {
  const location = useLocation();
  const article = location.state;
  const { title, body, thumbnail, date, tags } = article;

  return (
    <StyledArticleWrapper>
      <Header />
      <StyledH1>{title}</StyledH1>
      <ArticleOptions article={article} />
      <StyledInfoWrapper>
        <StyledName>이주함</StyledName>
        <StyledDelimeter>•</StyledDelimeter>
        <span>{date}</span>
      </StyledInfoWrapper>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      {thumbnail && (
        <ImageWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail" />
        </ImageWrapper>
      )}
      <StyledContent>{body}</StyledContent>
      <Profile />
    </StyledArticleWrapper>
  );
};

export default Article;

const StyledArticleWrapper = styled.section`
  max-width: 768px;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  font-weight: 800;
  margin: 2rem 0;
  word-break: keep-all;
`;

const StyledInfoWrapper = styled.section`
  margin: 1rem 0;
`;

const StyledName = styled.span`
  font-weight: 700;
`;

const StyledDelimeter = styled.span`
  margin: 0 0.5rem;
`;

const StyledContent = styled.article`
  margin: 2rem 0;
`;
