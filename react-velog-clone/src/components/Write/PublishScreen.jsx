import React, { useState } from "react";
import styled from "styled-components";
import { client } from "../../libs/api";
import { useNavigate } from "react-router";

const PublishScreen = ({ articleData, onDataChange, setIsPublished }) => {
  const MAX_NUM = 150;
  const [textCnt, setTextCnt] = useState(0);
  const navigate = useNavigate();
  console.log(navigate);

  const handleChange = (e) => {
    const target = e.target;
    setTextCnt(target.value.length);

    if (target.value.length > MAX_NUM) {
      target.value = target.value.substring(0, MAX_NUM);
      target.style.color = "red";
      setTextCnt(150);
      return;
    }

    setTextCnt(target.value.length);
    target.style.color = "inherit";
    onDataChange("summary", e.target.value);
  };

  const handlePost = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    // id 하나씩 증가 (1, 2, 3, ...)
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;
    // Date date

    await client.post("/article", {
      ...articleData,
      id,
      date,
      thumbnail:
        "data:image/png;base64,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",
    });

    navigate("/");
  };

  return (
    <PublishedWrapper>
      <LeftSection>
        <H3>포스트 미리보기</H3>-
        <Textarea
          onChange={handleChange}
          placeholder="당신의 포스트를 짧게 소개해보세요."
        />
        <TextCnt>{textCnt}/150</TextCnt>
      </LeftSection>
      <RightSection>
        <div>
          <H3>공개 설정</H3>-<H3>URL 설정</H3>-<H3>시리즈 설정</H3>-
        </div>
        <BtnWrapper>
          <CancelBtn onClick={() => setIsPublished(false)}>취소</CancelBtn>
          <PublishBtn onClick={handlePost}>출간하기</PublishBtn>
        </BtnWrapper>
      </RightSection>
    </PublishedWrapper>
  );
};

export default PublishScreen;

const PublishedWrapper = styled.div`
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

const LeftSection = styled.section`
  border-right: 1px solid var(--main-lightgray-color);
`;
const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  all: unset;
  width: 90%;
  height: 10rem;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: white;
  overflow-wrap: break-word;
`;

const TextCnt = styled.p`
  color: var(--main-gray-color);
  font-size: 0.75rem;
  text-align: right;
  margin-top: 0.5rem;
`;

const BtnWrapper = styled.div`
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

const CancelBtn = styled.button`
  background-color: var(--main-lightgray-color);
  margin-right: 1rem;
`;

const PublishBtn = styled.button`
  background-color: var(--main-green-color);
`;
