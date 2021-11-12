import React, { useState } from "react";
import styled from "styled-components";
import ArticleTitle from "../components/Write/ArticleTitle";
import ArticleTags from "../components/Write/ArticleTags";
import ArticleBody from "../components/Write/ArticleBody";
import ArticleFooter from "../components/Write/ArticleFooter";

const Write = () => {
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "", // 미완
    series: "", // 미완
    tags: [],
    thumbnail: "", // 미완
    date: "",
  });

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
      <ArticleFooter articleData={articleData} />
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
