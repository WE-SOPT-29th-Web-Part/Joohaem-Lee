import React, { useState } from "react";
import styled from "styled-components";
import ImageWrapper from "../common/ImageWrapper";
import { imageClient } from "../../libs/api";
import { dataChangeType } from "types";

interface PublishImageProps {
  thumbnail: string;
  onDataChange: dataChangeType;
}

const PublishImage = (props: PublishImageProps) => {
  const { thumbnail, onDataChange } = props;
  const [thumbnailImage, setThumbnailImage] = useState<string>(thumbnail);

  // 서버에 이미지 POST, 정제된 이미지 url을 GET
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // const fileReader = new FileReader();

    // if (!(e.target instanceof HTMLInputElement)) return;
    const formData = new FormData();

    if (e.target.files === null) return;
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
      <StH3>포스트 미리보기</StH3>
      <StThumnailWrapper>
        {thumbnailImage ? (
          <ImageWrapper ratio="56%">
            <StThumbnailImage src={thumbnailImage} alt="thumbnail" />
          </ImageWrapper>
        ) : (
          <StThumbnailNone>✖</StThumbnailNone>
        )}

        <StInputWrapper>
          <StInputImage
            id="thumbnail"
            type="file"
            onChange={handleImageChange}
          />
          <StNoImageBtn onClick={deleteImage}>썸네일 삭제</StNoImageBtn>
          <StInputLabel htmlFor="thumbnail">썸네일 업로드</StInputLabel>
        </StInputWrapper>
      </StThumnailWrapper>
    </>
  );
};

export default PublishImage;

const StH3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StThumnailWrapper = styled.div`
  width: 100%;
  height: 12rem;

  margin-bottom: 2rem;
`;

const StThumbnailImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

const StThumbnailNone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: var(--main-lightgray-color);
`;

const StInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StInputImage = styled.input`
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  margin: 0;
`;

const StNoImageBtn = styled.button`
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

const StInputLabel = styled.label`
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
