import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const ContainerContent = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const PageTitle = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
      flex-direction: row;
      height: 100%;
      max-height: calc(100%);
  `}
`;

export const SectionForm = styled.section`
  padding: 2rem;
  ${media.greaterThan("medium")`
      margin-right: 5rem;
      width: 50%;
      height: 100%;
  `}
`

export const SectionMap = styled.section`
  height: 30rem;
  margin-bottom: 2rem;

  ${media.greaterThan("medium")`
      border-left: 1px solid ${({ theme }) => theme.colors["gray/300"]};
      width: 50%;
      height: 100%;
  `}
`

export const RadioButtonsContainer = styled.div`
  display: flex;
`

export const FieldTitle = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  padding: 2rem 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["gray/300"]};
  border-radius: 2rem;
  opacity: 0.7;
  margin-bottom: 2rem;

  ${media.greaterThan("medium")`
    width: 22rem;
  `}
`

export const RadioButtonLabelInputContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const LabelRadioButton = styled.label`
  font-size: 1.4rem;
`

export const RadioButton = styled.input`
  margin-right: 1rem;
`

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 20%;
  border-radius: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  font-size: 1.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors["gray/700"]};
  color: ${({ theme }) => theme.colors["white"]};
  margin-bottom: 1rem;
`;