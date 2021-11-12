import React from "react";

const ArticlesCard = ({ article }) => {
  const { title, summary, tags, thumbnail, date } = article;
  return (
    <article>
      <img src={thumbnail} alt="이미지" />
      <h3>{title}</h3>
      <h4>{summary}</h4>
      {tags.map((tag) => (
        <span key={`tag-${tag}`}>{tag}</span>
      ))}
      <p>{date}</p>
    </article>
  );
};

export default ArticlesCard;
