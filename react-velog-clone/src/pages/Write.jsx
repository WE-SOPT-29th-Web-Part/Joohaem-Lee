import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleTitle from "../components/Write/ArticleTitle";
import ArticleTags from "../components/Write/ArticleTags";
import ArticleBody from "../components/Write/ArticleBody";
import ArticleFooter from "../components/Write/ArticleFooter";
import PublishScreen from "../components/WritePublishing/PublishScreen";
import { client } from "../libs/api";

const Write = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state;

  const [articleData, setArticleData] = useState(
    // ??는 ||와 달리 undefined에 대해 구별 (0에 대한 건 넘어가줌)
    article ?? {
      title: "",
      body: "",
      summary: "",
      series: "", // 미완
      tags: [],
      thumbnail: "",
    }
  );
  const [isPublished, setIsPublished] = useState(false);

  const handleDataChange = (key, value) => {
    // key: title, body, summary, thumnail , ...
    // value: e.target.value
    const tempArticleData = { ...articleData };
    // 객체 복사 -> 상태는 불변성을 유지해야함
    tempArticleData[key] = value;
    // key가 변수처럼
    setArticleData(tempArticleData);
  };

  const handleTagAdd = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };

  const handleTagDelete = (value) => {
    const tempData = { ...articleData };
    tempData.tags = tempData.tags.filter((tag) => tag !== value);
    setArticleData(tempData);
  };

  const createArticle = async () => {
    if (article) {
      await client.patch(`/article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", articleData);
    navigate("/");
  };

  return (
    <StyledMain>
      <ArticleTitle title={articleData.title} onDataChange={handleDataChange} />
      <StyledHr noshade />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        onAddTag={handleTagAdd}
        onDeleteTag={handleTagDelete}
      />
      <StyledHr noshade />
      <ArticleBody body={articleData.body} onDataChange={handleDataChange} />
      <ArticleFooter setIsPublished={setIsPublished} />
      {isPublished && (
        <PublishScreen
          articleData={articleData}
          onDataChange={handleDataChange}
          setIsPublished={setIsPublished}
          createArticle={createArticle}
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
