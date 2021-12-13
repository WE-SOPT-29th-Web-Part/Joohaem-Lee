import React from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import { useNavigate } from "react-router";
import PublishSummary from "./PublishSummary";
import PublishImage from "./PublishImage";

const PublishScreen = ({ articleData, onDataChange, setIsPublished }) => {
  const navigate = useNavigate();

  const handlePost = async () => {
    await client.post("/article", {
      ...articleData,
    });

    navigate("/");
  };

  return (
    <StyledPublishedWrapper>
      <StyledLeftSection>
        <PublishImage onDataChange={onDataChange} />
        <PublishSummary onDataChange={onDataChange} />
      </StyledLeftSection>
      <StyledRightSection>
        <div>
          <StyledH3>공개 설정</StyledH3>-<StyledH3>URL 설정</StyledH3>-
          <StyledH3>시리즈 설정</StyledH3>-
        </div>
        <StyledBtnWrapper>
          <StyledCancelBtn onClick={() => setIsPublished(false)}>
            취소
          </StyledCancelBtn>
          <StyledPublishBtn onClick={handlePost}>출간하기</StyledPublishBtn>
        </StyledBtnWrapper>
      </StyledRightSection>
    </StyledPublishedWrapper>
  );
};

export default PublishScreen;

const StyledPublishedWrapper = styled.div`
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

const StyledLeftSection = styled.section`
  border-right: 1px solid var(--main-lightgray-color);
`;
const StyledRightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledH3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StyledBtnWrapper = styled.div`
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

const StyledCancelBtn = styled.button`
  background-color: var(--main-lightgray-color);
  margin-right: 1rem;
`;

const StyledPublishBtn = styled.button`
  background-color: var(--main-green-color);
`;
