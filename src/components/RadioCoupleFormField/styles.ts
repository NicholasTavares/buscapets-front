import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  &:not(last-child) {
    margin-right: 1rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
  margin-right: 0.5rem;
`;

export const InputRadio = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;
