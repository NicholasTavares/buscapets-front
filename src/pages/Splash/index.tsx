import { Loading } from "../../components/Loading";
import * as S from "./styles";
import * as Assets from "../../assets/index";

export const Splash = () => {
  return (
    <S.backgroundContainer>
      <S.itemsContainer>
        <S.logo alt= "Logo" src={Assets.LogoDark}></S.logo>
        <Loading/>
      </S.itemsContainer>
    </S.backgroundContainer>
  );
}