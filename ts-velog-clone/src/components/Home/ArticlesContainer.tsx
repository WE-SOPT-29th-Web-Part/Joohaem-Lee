import { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticlesCard";
import { client } from "../../libs/api";
import { ArticleInfo } from "components/types";

const ArticlesContainer = () => {
  const [articlesGetting, setArticlesGetting] = useState<ArticleInfo[]>([]);

  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticlesGetting(data);
  };

  // Mount 시 API 불러오기
  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <StSection>
      {articlesGetting.length !== 0 ? (
        articlesGetting.map((article) => (
          <ArticleCard key={`article-${article.id}`} article={article} />
        ))
      ) : (
        <StNoArticleText>게시글이 없습니다.</StNoArticleText>
      )}
    </StSection>
  );
};

export default ArticlesContainer;

const StSection = styled.section`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
`;

const StNoArticleText = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`;
