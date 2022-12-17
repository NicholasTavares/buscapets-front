import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

export const mainContainer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 3rem;
  padding-bottom: 1.2rem;;
  background-color: ${({ theme }) => theme.colors["gray/900"]};
  align-items: center;
`;

export const logoLink = styled(Link)`

`;

export const logo = styled.img`
  width: 15rem;
`;

export const linksContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const homeLink = styled(Link)`
  color: ${({ theme }) => theme.colors["white"]};
  text-decoration: none;
  font-size: 1rem;

  ${media.greaterThan("medium")`
    font-size:1.2rem;

  `}
`;

export const aboutUsLink = styled(Link)`
  color: ${({ theme }) => theme.colors["white"]};
  text-decoration: none;
  font-size: 1rem;

  ${media.greaterThan("medium")`
    font-size:1.2rem;

  `}
`;

export const rateUsLink = styled(Link)`
  color: ${({ theme }) => theme.colors["white"]};
  text-decoration: none;
  font-size: 1rem;

  ${media.greaterThan("medium")`
    font-size:1.2rem;

  `}
`;

export const privacyPolicyLink = styled(Link)`
  color: ${({ theme }) => theme.colors["white"]};
  text-decoration: none;
  font-size: 1rem;

  ${media.greaterThan("medium")`
    font-size:1.2rem;

  `}
`;

export const socialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const twitterLink = styled(Link)`

`;

export const instagramLink = styled(Link)`

`;

export const emailLink = styled(Link)`

`;

export const twitterLogo = styled.img`

`;

export const instagramLogo = styled.img`

`;

export const emailLogo = styled.img`

`;

export const footerText = styled.p`
  color: ${({ theme }) => theme.colors["gray/500"]};
  text-decoration: none;
  font-size: 1rem;
`;