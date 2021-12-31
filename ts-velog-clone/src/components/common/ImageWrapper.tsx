import styled from "styled-components";

interface ImageWrapperProps {
  ratio: string;
  children: JSX.Element;
}

const ImageWrapper = (props: ImageWrapperProps) => {
  const { ratio, children } = props;
  // ratio 56%
  return <StImgWrapper ratio={ratio}>{children}</StImgWrapper>;
};

export default ImageWrapper;

// 50% -> 가로 세로 2:1
const StImgWrapper = styled.div<{ ratio: string }>`
  padding-top: ${({ ratio }) => ratio};
  position: relative;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
