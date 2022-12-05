import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
  padding: 0.5rem;
  transition: 500ms border-color;
  height: 12rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/500"]};
  border-radius: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
  }
`;
