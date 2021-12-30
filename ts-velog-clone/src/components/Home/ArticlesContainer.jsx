import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import ArticleCard from "./ArticlesCard";

const ArticlesContainer = () => {
  const [articlesGetting, setArticlesGetting] = useState([]);

  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticlesGetting(data);
  };

  // Mount 시 API 불러오기
  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <Section>
      {articlesGetting.length !== 0 ? (
        articlesGetting.map((article) => (
          <ArticleCard key={`article-${article.id}`} article={article} />
        ))
      ) : (
        <NoArticleText>게시글이 없습니다.</NoArticleText>
      )}
    </Section>
  );
};

export default ArticlesContainer;

const Section = styled.section`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
`;

const NoArticleText = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`;
