import React, { useState } from "react";
import ArticleTitle from "../components/Write/ArticleTitle";
import ArticleTags from "../components/Write/ArticleTags";
import ArticleBody from "../components/Write/ArticleBody";
import ArticleFooter from "../components/Write/ArticleFooter";
import { client } from "../libs/api";

const Write = () => {
  const [articleData, setArticleData] = useState({
    id: "", // articleData.length + 1
    title: "",
    body: "",
    summary: "", // -
    series: "",
    tags: [],
    thumbnail: "", // 다음시간
    data: "", // 오늘 날짜 찍기
  });

  const handlePost = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약 정해주기!",
    });
  };

  return (
    <main>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter setArticleData={setArticleData} />
      <button onClick={handlePost}>POST!</button>
    </main>
  );
};

export default Write;
