import * as S from "./styles";
import logoDark from "../../assets/buscapets-logo-dark.png";
import { Loading } from "../../components/Loading";


export const Splash = () => {
  return (
    <S.backgroundContainer>
      <S.itemsContainer>
        <S.logo alt= "Logo" src={logoDark}></S.logo>
        <Loading/>
      </S.itemsContainer>
    </S.backgroundContainer>
  );
}