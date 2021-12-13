import React, { useState } from "react";
import styled from "styled-components";
import { imageClient } from "../../libs/api";
import ImageWrapper from "../common/ImageWrapper";

const PublishImage = ({ onDataChange }) => {
  const [thumbnailImage, setThumbnailImage] = useState("");

  // 서버에 이미지 POST, 정제된 이미지 url을 GET
  const handleImageChange = async (e) => {
    // const fileReader = new FileReader();
    const formData = new FormData();
    const imageFile = e.target.files[0];

    formData.append("file", imageFile);
    // request body: formData / response body: post의 결과값
    const imageResponse = await imageClient.post("", formData);
    const imageUrl = imageResponse.data.url;
    onDataChange("thumbnail", imageUrl);

    setThumbnailImage(imageUrl);
  };

  const deleteImage = () => {
    onDataChange("thumbnail", "");

    setThumbnailImage("");
  };

  return (
    <>
      <H3>포스트 미리보기</H3>
      <ThumnailWrapper>
        {thumbnailImage ? (
          <ImageWrapper ratio="56%">
            <ThumbnailImage src={thumbnailImage} alt="thumbnail" />
          </ImageWrapper>
        ) : (
          <ThumbnailNone>✖</ThumbnailNone>
        )}

        <InputWrapper>
          <InputImage id="thumbnail" type="file" onChange={handleImageChange} />
          <NoImageBtn onClick={deleteImage}>썸네일 삭제</NoImageBtn>
          <InputLabel for="thumbnail">썸네일 업로드</InputLabel>
        </InputWrapper>
      </ThumnailWrapper>
    </>
  );
};

export default PublishImage;

const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ThumnailWrapper = styled.div`
  width: 100%;
  height: 12rem;

  margin-bottom: 2rem;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

const ThumbnailNone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: var(--main-lightgray-color);
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InputImage = styled.input`
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  margin: 0;
`;

const NoImageBtn = styled.button`
  width: 7rem;
  height: 2.5rem;
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  background-color: var(--main-lightgray-color);
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 2.5rem;
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  background-color: var(--main-green-color);
`;
