import styled from "styled-components";
import { Plus } from "phosphor-react";
import media from "styled-media-query";

type PublicationImageProps = {
  imageUrl: string;
};

export const Container = styled.div`
  display: flex;
  width: 100%;

  &:not(last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const AddImageIcon = styled(Plus)`
    margin: auto;
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.colors["gray/700"]};

    ${media.greaterThan("large")`
      width: 6rem;
      height: 6rem;
  `}
`

export const ImagePreview = styled.div<PublicationImageProps>`
  cursor: pointer;
  position: relative;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 14rem;
  height: 14rem;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors["gray/300"]};

  ${media.greaterThan("large")`
    width: 18rem;
    height: 18rem;
  `}
`

export const Input = styled.input`
  display: none;
  outline: none;
  border: none;
  transition: 500ms border-color;
`;

export const FieldError = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors["rose/600"]};
`