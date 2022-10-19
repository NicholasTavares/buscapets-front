import styled from "styled-components";
import media from "styled-media-query";

type DropDownProps = {
  open: boolean;
};

export const Button = styled.div`
  cursor: pointer;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  overflow: hidden;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const Container = styled.div<DropDownProps>`
  position: absolute;
  z-index: 1;
  top: 6rem;
  background-color: ${({ theme }) => theme.colors["gray/200"]};
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  border-top: none;
  border-radius: 1rem;
  padding: 1rem;
  transition: all 500ms;
  opacity: ${({ open }) => (open ? 1 : 0)};
  left: ${({ open }) => (open ? "2rem" : "-100%")};
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space;
  align-items: center;
  border-radius: 5rem;
  padding: 1rem;
  min-width: 5rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors["gray/900"]};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors["gray/500"]};
  }

  & > svg {
    margin-right: 0.5rem;
  }
`;
