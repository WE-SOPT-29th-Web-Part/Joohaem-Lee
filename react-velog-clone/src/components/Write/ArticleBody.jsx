import React from "react";

const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value,
    }));
  };
  return (
    <textarea
      placeholder="내용을 입력하세요"
      onChange={handleChange}
    ></textarea>
  );
};

export default ArticleBody;
