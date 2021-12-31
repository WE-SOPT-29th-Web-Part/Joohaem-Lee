import styled from "styled-components";
import { arrayChangeType, arrayRemoveType, ArticleInfo } from "types";

interface ArticleTagsProps {
  tags: string[];
  articleData: ArticleInfo;
  onAddTag: arrayChangeType;
  onDeleteTag: arrayRemoveType;
}

const ArticleTags = (props: ArticleTagsProps) => {
  const { tags, articleData, onAddTag, onDeleteTag } = props;
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTag = e.currentTarget.value;
      if (articleData.tags.includes(newTag)) return;
      if (newTag === "") return;
      // setArticleData((articleData) => ({
      //   ...articleData,
      //   tags: [...articleData.tags, newTag],
      // }));
      // 비동기 -> 불변성 유지 필요
      onAddTag("tags", newTag);
      e.currentTarget.value = "";
    }
  };
  return (
    <StTags>
      {tags.map((tag, idx) => (
        <StTag
          key={`tag-${idx}`}
          onClick={(e) => onDeleteTag(e.currentTarget.innerText)}
        >
          {tag}
        </StTag>
      ))}
      <StInput
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="태그를 입력하세요"
      />
    </StTags>
  );
};

export const StTags = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
export const StTag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 1rem;
  margin: 0 0.75rem 0.75rem 0;
  border-radius: 1rem;
  background: rgb(241, 243, 245);
  font-size: 1rem;
  color: rgb(12, 166, 120);
  transition: all 0.125s ease-in;
  &:hover {
    cursor: pointer;
  }
`;
const StInput = styled.input`
  display: inline;
  min-width: 8rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  line-height: 2rem;
`;

export default ArticleTags;
