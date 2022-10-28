import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 1rem;
  height: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  background-color: ${({ theme }) => theme.colors["gray/50"]};

  ${media.greaterThan("medium")`
    padding: 0 2rem;
    height: 8rem;
  `}
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;

  ${media.greaterThan("medium")`
    width: 14rem;
  `}
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Text = styled.span`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 1.25rem;
`;

export const TextButton = styled.div`
  cursor: pointer;
  display: none;
  padding: 0rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 1.3rem;

  & > svg {
    transform: rotate(-45deg);
  }

  &:hover {
    text-decoration: underline;
  }

  ${media.greaterThan("medium")`
    display: flex;
  `}
`;

export const PublishButton = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.7rem 1.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["lime/500"]};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/50"]};
  font-size: 1.3rem;
  margin-left: 1.5rem;
  transition: all 500ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors["lime/600"]};
    background-color: ${({ theme }) => theme.colors["lime/600"]};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
    background-color: ${({ theme }) => theme.colors["lime/700"]};
    transform: scale(1.05);
  }

  ${media.greaterThan("medium")`
    margin-right: 1.5rem;
  `}
`;

export const SignInButton = styled.div`
  cursor: pointer;
  display: none;
  padding: 0.7rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 1.3rem;
  transition: all 500ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors["lime/500"]};
    color: ${({ theme }) => theme.colors["lime/500"]};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
    color: ${({ theme }) => theme.colors["lime/700"]};
    transform: scale(1.05);
  }

  ${media.greaterThan("medium")`
    display: flex;
  `}
`;
