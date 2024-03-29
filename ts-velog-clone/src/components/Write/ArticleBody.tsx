import styled from "styled-components";
import { dataChangeType } from "types";

interface ArticleBodyProps {
  body: string;
  onDataChange: dataChangeType;
}

const ArticleBody = (props: ArticleBodyProps) => {
  const { body, onDataChange } = props;
  return (
    <StTextarea
      value={body}
      placeholder="당신의 이야기를 적어보세요..."
      onChange={(e) => onDataChange("body", e.target.value)}
    ></StTextarea>
  );
};

const StTextarea = styled.textarea`
  all: unset;
  width: 100%;
  height: 10rem;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  overflow-wrap: break-word;
  &::placeholder {
    font-style: italic;
  }
`;

export default ArticleBody;
