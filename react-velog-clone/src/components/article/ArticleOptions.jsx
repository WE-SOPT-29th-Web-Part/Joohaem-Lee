import React from "react";
import { client } from "../../libs/api";
import { useParams, useNavigate } from "react-router-dom";

const ArticleOptions = ({ article }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleArticleDelete = async (e) => {
    await client.delete(`article/${id}`);
    navigate("/");
  };

  const hnadleNavigateArticleEdit = () => {
    navigate(`/article/edit/${id}`, { state: article });
  };
  return (
    <div>
      <button>통계</button>
      <button onClick={hnadleNavigateArticleEdit}>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </div>
  );
};

export default ArticleOptions;
