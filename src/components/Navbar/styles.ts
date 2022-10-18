import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 1rem;
  height: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray/300"]}; ;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-left: auto;
`;

export const PublishButton = styled.div`
  display: flex;
  padding: 0.8rem 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["lime/500"]};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/50"]};
  font-size: 1.25rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
