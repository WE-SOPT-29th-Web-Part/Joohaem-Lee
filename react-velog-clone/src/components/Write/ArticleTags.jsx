import React from "react";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, e.target.value],
      // }));
      const tempData = { ...articleData };
      tempData.tags = [...tempData.tags, e.target.value];
      setArticleData(tempData);
      e.target.value = "";
    }
  };

  return (
    <section>
      {tags.map((tag, idx) => (
        <span key={`tag-${idx}`}>{tag}</span>
      ))}
      <input type="text" onKeyPress={handleKeyPress} />
    </section>
  );
};

export default ArticleTags;
