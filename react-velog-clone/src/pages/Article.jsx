import React from "react";
import { useLocation } from "react-router-dom";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImageWrapper from "../components/common/ImageWrapper";
import Profile from "../components/Home/Profile";
import { Tags } from "../components/Write/ArticleTags";
import { Tag } from "../components/Write/ArticleTags";

const Article = () => {
  const location = useLocation();
  const article = location.state;
  console.log(`location`, location);
  const { title, body, thumbnail, date, tags } = article;
  console.log(`tags`, tags);

  return (
    <section>
      <Header />
      <h1>{title}</h1>
      <ArticleOptions article={article} />
      <section>
        <span>이주함</span>
        <span>•</span>
        <span>{date}</span>
      </section>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      <Profile />
      {/* {thumbnail && (
        <ImageWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail" />
        </ImageWrapper>
      )} */}
      <section>{body}</section>
    </section>
  );
};

export default Article;
