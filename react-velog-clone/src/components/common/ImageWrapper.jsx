import React from "react";
import styled from "styled-components";

const ImageWrapper = ({ ratio, children }) => {
  // ratio 56%
  return <StyledImgWrapper ratio={ratio}>{children}</StyledImgWrapper>;
};

export default ImageWrapper;

// 50% -> 가로 세로 2:1
const StyledImgWrapper = styled.div`
  padding-top: ${({ ratio }) => ratio};

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
