import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const H1 = styled.h1`
  font-size: 2rem;
`;
export const Img = styled.img`
  width: 32rem;
`;
export const LinkPage = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #1073e8;
  
  &:hover{
    text-decoration: underline;
  }
`;
