import React from "react";
import styled from "styled-components";
import { imageClient } from "../../libs/api";

const PublishImage = ({ onDataChange }) => {
  // 서버에 이미지 POST, 정제된 이미지 url을 GET
  const handleImageChange = async (e) => {
    const formData = new FormData();
    const imageFile = e.target.files[0];

    formData.append("file", imageFile);
    const imageResponse = await imageClient.post("", formData);
    console.log(`imageResopnse`, imageResponse);

    // request body / response body
    const imageUrl = imageResponse.data.url;
    console.log(`imageUrl`, imageUrl);
    onDataChange("thumbnail", imageUrl);
  };

  return (
    <>
      <H3>포스트 미리보기</H3>
      <input type="file" onChange={handleImageChange} />
      <label>썸네일 미리보기</label>
    </>
  );
};

export default PublishImage;

const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
