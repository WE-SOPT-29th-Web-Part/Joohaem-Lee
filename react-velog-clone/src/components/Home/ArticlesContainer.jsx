import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import ArticleCard from "./ArticlesCard";

const ArticlesContainer = () => {
  const [articleData, setArticleData] = useState([]);

  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticleData(data);
  };

  // Mount 시 API 불러오기
  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <Section>
      {articleData.map((article) => (
        <ArticleCard key={`article-${article.id}`} article={article} />
      ))}
    </Section>
  );
};

const Section = styled.section`
  width: 60%;
  margin: 0 auto;
`;

export default ArticlesContainer;
