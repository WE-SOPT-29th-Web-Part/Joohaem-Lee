import styled from "styled-components";
import PublishSummary from "./PublishSummary";
import PublishImage from "./PublishImage";

const PublishScreen = ({
  articleData,
  onDataChange,
  onIsPublishedChange,
  createArticle,
}) => {
  const { thumbnail, summary } = articleData;
  const handlePost = async () => {
    createArticle();
  };

  return (
    <StPublishedWrapper>
      <StLeftSection>
        <PublishImage thumbnail={thumbnail} onDataChange={onDataChange} />
        <PublishSummary summary={summary} onDataChange={onDataChange} />
      </StLeftSection>
      <StRightSection>
        <div>
          <StH3>공개 설정</StH3>-<StH3>URL 설정</StH3>-<StH3>시리즈 설정</StH3>-
        </div>
        <StBtnWrapper>
          <StCancelBtn onClick={() => onIsPublishedChange(false)}>
            취소
          </StCancelBtn>
          <StPublishBtn onClick={handlePost}>출간하기</StPublishBtn>
        </StBtnWrapper>
      </StRightSection>
    </StPublishedWrapper>
  );
};

export default PublishScreen;

const StPublishedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: var(--main-white-color);
  padding: 5rem 0;

  display: flex;
  justify-content: center;
  & > section {
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }

  animation: slideUp 250ms ease-in-out forwards;
  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const StLeftSection = styled.section`
  border-right: 1px solid var(--main-lightgray-color);
`;
const StRightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StH3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    width: 6rem;
    height: 2.5rem;
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    &:hover {
      font-weight: 700;
    }
  }
`;

const StCancelBtn = styled.button`
  background-color: var(--main-lightgray-color);
  margin-right: 1rem;
`;

const StPublishBtn = styled.button`
  background-color: var(--main-green-color);
`;
