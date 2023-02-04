import * as S from "./styles";
import * as Assets from "../../assets/index";
import { Navbar } from "../../layout/Navbar";

const NotFound = () => {
  return (
    <S.MainContainer>
      <Navbar></Navbar>

      <S.Main>
        <S.Img alt="Dog" src={Assets.DogNotFoundIcon} />
        <S.H1>Página não encontrada</S.H1>
        <S.LinkPage to="/">Página Inicial</S.LinkPage>
      </S.Main>
    </S.MainContainer>
  );
};

export default NotFound;
