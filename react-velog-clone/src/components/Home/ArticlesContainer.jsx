import React, { useState, useEffect } from "react";
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
    <section>
      {articleData.map((article) => (
        <ArticleCard key={`article-${article.id}`} article={article} />
      ))}
    </section>
  );
};

export default ArticlesContainer;
