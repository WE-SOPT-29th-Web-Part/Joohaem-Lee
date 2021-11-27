import React from "react";
import { useLocation } from "react-router-dom";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import Profile from "../components/Home/Profile";

const Article = () => {
  const location = useLocation();
  console.log(`location`, location);
  const { title, body, thumbail, date, tags } = location.state;
  console.log(`tags`, tags);

  return (
    <section>
      <Header />
      <h1>{title}</h1>
      <ArticleOptions />
      <article>
        <span>이주함</span>
        <span>•</span>
        <span>{date}</span>
      </article>
      {/* {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))} */}
      <Profile />
    </section>
  );
};

export default Article;
