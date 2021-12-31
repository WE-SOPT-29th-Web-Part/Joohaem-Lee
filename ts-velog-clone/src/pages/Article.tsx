import styled from "styled-components";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImageWrapper from "../components/common/ImageWrapper";
import Profile from "../components/Home/Profile";

import { useLocation } from "react-router-dom";
import { StTags } from "../components/Write/ArticleTags";
import { StTag } from "../components/Write/ArticleTags";
import { ArticleInfo } from "types";

const Article = () => {
  const location = useLocation();
  const article: ArticleInfo = location.state;
  const { title, body, thumbnail, date, tags } = article;

  return (
    <StArticleWrapper>
      <Header />
      <StH1>{title}</StH1>
      <ArticleOptions article={article} />
      <StInfoWrapper>
        <StName>이주함</StName>
        <StDelimeter>•</StDelimeter>
        <span>{date}</span>
      </StInfoWrapper>
      <StTags>
        {tags.map((tag) => (
          <StTag key={tag}>{tag}</StTag>
        ))}
      </StTags>
      {thumbnail && (
        <ImageWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail" />
        </ImageWrapper>
      )}
      <StContent>{body}</StContent>
      <Profile />
    </StArticleWrapper>
  );
};

export default Article;

const StArticleWrapper = styled.section`
  max-width: 768px;
  margin: 0 auto;
`;

const StH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  font-weight: 800;
  margin: 2rem 0;
  word-break: keep-all;
`;

const StInfoWrapper = styled.section`
  margin: 1rem 0;
`;

const StName = styled.span`
  font-weight: 700;
`;

const StDelimeter = styled.span`
  margin: 0 0.5rem;
`;

const StContent = styled.article`
  margin: 2rem 0;
`;
