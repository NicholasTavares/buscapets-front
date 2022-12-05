import styled from "styled-components";
import media from "styled-media-query";

type ImagePreviewProps = {
  imageUrl: string;
};

export const PhotoFieldContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin: 0.5rem 0;
  margin-bottom: 3rem;
`;

export const PhotoField = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 12rem;
  width: 12rem;
  border-radius: 2rem;

  ${media.greaterThan("medium")`
    height: 14rem;
    width: 14rem;
  `}

  ${media.greaterThan("large")`
    height: 16rem;
    width: 16rem;
  `}

  &:after {
    position: absolute;
    top: -2px;
    left: -2px;
    content: "";
    box-sizing: content-box;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["gray/500"]};
    color: ${({ theme }) => theme.colors["gray/800"]};
    z-index: 10;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    padding: 2px;
  }
`;

export const PhotoPreview = styled.div<ImagePreviewProps>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
`;

export const PhotoInput = styled.input`
  display: none;
  opacity: 0;
`;
