import React, { useState } from "react";
import styled from "styled-components";
import { client, imageClient } from "../../libs/api";
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
    await client.post("/article", {
      ...articleData,
    });

    navigate("/");
  };

  // 서버에 이미지 POST, 정제된 이미지 url을 GET
  const handleImageChange = async (e) => {
    const formData = new FormData();
    const imageFile = e.target.files[0];

    formData.append("file", imageFile);
    const imageResponse = await imageClient.post("", formData);

    // request body / response body
    const imageUrl = imageResponse.data.url;
    onDataChange("thumbnail", imageUrl);
  };

  return (
    <PublishedWrapper>
      <LeftSection>
        <H3>포스트 미리보기</H3>
        <input type="file" onChange={handleImageChange} />
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
