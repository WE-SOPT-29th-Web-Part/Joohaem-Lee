import React from "react";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newTag = e.target.value;
      if (articleData.tags.includes(newTag)) return;
      // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, newTag],
      // }));
      const tempData = { ...articleData };
      tempData.tags = [...tempData.tags, newTag];
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
