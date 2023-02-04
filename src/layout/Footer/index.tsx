import * as S from "./styles";
import logo from "../../assets/buscapets-logo-footer.svg";

export const Footer = () => {
  const date = new Date();
  return (
    <S.mainContainer>
      <S.logoLink to="/">
        <S.logo alt="Logo do Buscapets" src={logo} />
      </S.logoLink>
      <S.linksContainer>
        <S.homeLink to="/">Página inicial</S.homeLink>
        <S.aboutUsLink to="">Sobre nós</S.aboutUsLink>
        <S.rateUsLink to="">Avalie nosso site</S.rateUsLink>
        <S.privacyPolicyLink to="">Política de privacidade</S.privacyPolicyLink>
      </S.linksContainer>
      <S.socialMediaContainer>
        <S.instagramLink href="https://www.instagram.com/" target="_blank">
          <S.logoInstagram />
        </S.instagramLink>

        <S.twitterLink href="https://twitter.com/explore" target="_blank">
          <S.logoTwitter />
        </S.twitterLink>

        <S.emailLink href="" target="_blank">
          <S.logoEmail />
        </S.emailLink>
      </S.socialMediaContainer>
      <S.footerText>Todos os direitos reservados ao Buscapets {date.getFullYear()}</S.footerText>
    </S.mainContainer>
  )
};