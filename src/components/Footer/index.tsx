import * as S from "./styles";
import logo from "../../assets/buscapets-logo-footer.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import emailLogo from "../../assets/email-logo.svg";

export const Footer = () => {
  return (
    <S.mainContainer>
      <S.logoLink to="/">
        <S.logo alt="Logo do Buscapets" src={logo}/>
      </S.logoLink>
      <S.linksContainer>
        <S.homeLink to="/">Página inicial</S.homeLink>
        <S.aboutUsLink to="">Sobre nós</S.aboutUsLink>
        <S.rateUsLink to="">Avalie nosso site</S.rateUsLink>
        <S.privacyPolicyLink to="">Política de privacidade</S.privacyPolicyLink>
      </S.linksContainer>
      <S.socialMediaContainer>
        <S.instagramLink to="">
          <S.instagramLogo alt="Logo do instagram" src={instagramLogo} />

        </S.instagramLink>

        <S.twitterLink to="">
          <S.twitterLogo alt="Logo do twitter" src={twitterLogo} />

        </S.twitterLink>

        <S.emailLink to="">
          <S.emailLogo alt="Logo do instagram" src={emailLogo} />

        </S.emailLink>
      </S.socialMediaContainer>
      <S.footerText>Todos os direitos reservados ao Buscapets</S.footerText>
    </S.mainContainer>
  )
};