import React from "react";

const ArticleOptions = () => {
  const handleArticleDelete = () => {};
  return (
    <div>
      <button>통계</button>
      <button>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </div>
  );
};

export default ArticleOptions;
