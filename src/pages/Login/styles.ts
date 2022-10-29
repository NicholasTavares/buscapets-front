import { Login } from './index';
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const MainContainer = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`;

export const WelcomeText = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors["gray/900"]};
  margin-bottom: 2rem;
`;

export const GoogleLogInButton = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors["gray/400"]};
  border-radius: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
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

export const LogInForm = styled.form`
  width: 100%;
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
  color: ${({ theme }) => theme.colors["gray/900"]};
  text-decoration-color: ${({ theme }) => theme.colors["gray/300"]} ;
  font-size: 0.8rem;
`;

export const LogInButton = styled.button`
  width: 100%;
  border-radius: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  font-size: 1.6rem;
  border: none;
  background-color:  ${({ theme }) => theme.colors["gray/700"]};
  color:  ${({ theme }) => theme.colors["white"]};
  margin-bottom: 1rem;
`;

export const RegisterLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const RegisterLinkText = styled.span`
  color:  ${({ theme }) => theme.colors["gray/400"]};
`;

export const RegisterLink = styled(Link)`
  color:  ${({ theme }) => theme.colors["gray/900"]};
`;