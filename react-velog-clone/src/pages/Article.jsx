import React from "react";
import { useLocation } from "react-router-dom";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImageWrapper from "../components/common/ImageWrapper";
import Profile from "../components/Home/Profile";

const Article = () => {
  const location = useLocation();
  console.log(`location`, location);
  const { title, body, thumbnail, date, tags } = location.state;
  console.log(`tags`, tags);

  return (
    <section>
      <Header />
      <h1>{title}</h1>
      <ArticleOptions />
      <section>
        <span>이주함</span>
        <span>•</span>
        <span>{date}</span>
      </section>
      {/* {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))} */}
      <Profile />
      {thumbnail && (
        <ImageWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail" />
        </ImageWrapper>
      )}
      <section>{body}</section>
    </section>
  );
};

export default Article;
