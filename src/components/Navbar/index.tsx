import * as S from "./styles";
import logoDark from "../../assets/buscapets-logo-dark.png";
import { DropDownItems } from "../DropDownItems";
import { PawPrint } from "phosphor-react";

export const Navbar = () => {
  return (
    <S.Container>
      <DropDownItems />
      <S.LogoContainer>
        <S.Logo
          src={logoDark}
          alt="Logomarca do Buscapets com uma lupa e nome buscapets"
        />
      </S.LogoContainer>
      <S.ContainerButtons>
        <S.TextButton>Ajuda</S.TextButton>
        <S.TextButton>
          <PawPrint size={20} weight="regular" /> <S.Text>Petshops</S.Text>
        </S.TextButton>
        <S.TextButton>Minhas publicações</S.TextButton>
        <S.PublishButton>+ Publicar</S.PublishButton>
        <S.SignInButton>Entrar</S.SignInButton>
      </S.ContainerButtons>
    </S.Container>
  );
};
