import React, { useState } from "react";
import styled from "styled-components";
import ArticleTitle from "../components/Write/ArticleTitle";
import ArticleTags from "../components/Write/ArticleTags";
import ArticleBody from "../components/Write/ArticleBody";
import ArticleFooter from "../components/Write/ArticleFooter";
import PublishScreen from "../components/Write/PublishScreen";

const Write = () => {
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    series: "", // 미완
    tags: [],
    thumbnail: "", // 미완
    date: "",
  });
  const [isPublished, setIsPublished] = useState(false);

  return (
    <StyledMain>
      <ArticleTitle setArticleData={setArticleData} />
      <StyledHr noshade />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <StyledHr noshade />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter setIsPublished={setIsPublished} />
      {isPublished && (
        <PublishScreen
          articleData={articleData}
          setArticleData={setArticleData}
          setIsPublished={setIsPublished}
        />
      )}
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 80%;
  height: 100%;
  padding: 2em;
`;

const StyledHr = styled.hr`
  margin: 24px 0 16px 0;
  width: 64px;
  height: 6px;
  background-color: var(--main-gray-color);
`;

export default Write;
