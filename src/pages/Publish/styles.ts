import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const PageTitle = styled.h2`
  font-size: 1.8rem;
  margin: 2rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
  font-weight: 400;
`;

export const FormFieldTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
  margin-bottom: 0.2rem;
  font-weight: 400;
`;

export const FormContainer = styled.form`
  padding: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;

export const FormFields = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  `}
`;

export const ContainerFormPartOne = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFormPartTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFormPartThree = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormFieldMap = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    width: 100%;
  `}
`;

export const ContainerMap = styled.div`
  margin-top: 1rem;
  display: flex;
  position: relative;
  height: 30rem;
  width: 100%;

  ${media.greaterThan("medium")`
    height: 40rem;
  `}
`;

export const PhotoFieldContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const PhotoField = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 8rem;
  width: 8rem;
  border-radius: 2rem;

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

export const PhotoPreview = styled.img`
  width: 100%;
`;

export const PhotoInput = styled.input``;
