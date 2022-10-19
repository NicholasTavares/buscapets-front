import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 1rem;
  height: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray/300"]};

  ${media.greaterThan("medium")`
    padding: 0 2rem;
  `}
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

export const Text = styled.span`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 1.25rem;
`;

export const TextButton = styled.div`
  display: none;
  padding: 0rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 1.25rem;

  & > svg {
    transform: rotate(-45deg);
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
  font-size: 1.25rem;
  margin-right: 1rem;
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
  font-size: 1.25rem;

  ${media.greaterThan("medium")`
    display: flex;
  `}
`;
