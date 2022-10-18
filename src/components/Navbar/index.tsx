import * as S from "./styles";
import logoDark from "../../assets/buscapets-logo-dark.png";
import { DropDownItems } from "../DropDownItems";

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
        <S.PublishButton>+ Publicar</S.PublishButton>
      </S.ContainerButtons>
    </S.Container>
  );
};
