import React from "react";
import { client } from "../../libs/api";
import { useParams, useNavigate } from "react-router-dom";

const ArticleOptions = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleArticleDelete = async (e) => {
    await client.delete(`article/${params.id}`);
    navigate("/");
  };
  return (
    <div>
      <button>통계</button>
      <button>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </div>
  );
};

export default ArticleOptions;
