import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const ContainerIllustrationForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContainerIllustration = styled.div`
  display: none;

  ${media.greaterThan("medium")`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Illustration = styled.img`
  width: 38rem;

  ${media.greaterThan("large")`
    width: 50rem;
  `}

  ${media.greaterThan("huge")`
    width: 60rem;
  `}
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 13rem;

  ${media.greaterThan("medium")`
    width: 15rem;
  `}
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32rem;
  transform: translateY(-10%);

  ${media.greaterThan("medium")`
    transform: translateY(0);
    width: 45%;
  `}
`;

export const WelcomeText = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
  margin-bottom: 2rem;
  font-weight: 400;
`;

export const GoogleLogInButton = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  border-radius: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  ${media.greaterThan("medium")`
    width: 30rem;
  `}
`;

export const GoogleIcon = styled.img`
  width: 3rem;
  margin-right: 1rem;
`;

export const GoogleLogInButtonText = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/500"]};
`;

export const ContainerOrText = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const OrText = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["gray/400"]};
`;

export const FormContainer = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;

export const LogInMailContainer = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray/500"]};
  margin-bottom: 2rem;
`;

export const LogInMailInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const LogInPasswordContainer = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray/500"]};
  margin-bottom: 1rem;
`;

export const LogInPasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const LogInLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const LabelCheckBox = styled.label`
  color: ${({ theme }) => theme.colors["gray/700"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LabelCheckBoxText = styled.span`
  color: ${({ theme }) => theme.colors["gray/900"]};
  font-size: 0.8rem;
`;

export const CheckBoxRememberPassword = styled.input`
  width: 1rem;
`;

export const ForgetPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors["gray/700"]};
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 100%;
  border-radius: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  font-size: 1.6rem;
  border: none;
  background-color: ${({ theme }) => theme.colors["gray/700"]};
  color: ${({ theme }) => theme.colors["white"]};
  margin-bottom: 1rem;
`;

export const LoginLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginLinkText = styled.span`
  color: ${({ theme }) => theme.colors["gray/700"]};
  font-size: 1rem;
  margin-right: 0.2rem;
`;

export const LoginLinkImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.colors["gray/900"]};
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginError = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors["rose/600"]};
`

export const LoginImgContainer = styled.div`
  display: flex;
`;

export const ImgVector = styled.img`
  font-size: 1rem;
  position: absolute;
  top: 110%;
`;
