import styled from "styled-components";

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

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
  margin-bottom: 0.2rem;
`;

export const Input = styled.textarea`
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.3rem;
  padding: 0.4rem 0;
  border: 1.5px solid ${({ theme }) => theme.colors["gray/400"]};
  padding: 1rem;
  transition: 500ms border-color;
  border-radius: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
  }
`;

export const FieldError = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors["rose/600"]};
`
