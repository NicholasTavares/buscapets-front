import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0.4rem 0;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.3rem;
  padding: 0.5rem;
  transition: 500ms border-color;
  border: 1px solid ${({ theme }) => theme.colors["gray/500"]};
  border-radius: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
  }
`;
