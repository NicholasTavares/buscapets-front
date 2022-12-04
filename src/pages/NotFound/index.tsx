import * as S from "./styles";
import DogImg from "../../assets/dog-not-found.svg";
import { Navbar } from "../../components/Navbar";

const NotFound = () => {
  return (
    <S.MainContainer>
      <Navbar></Navbar>

      <S.Main>
        <S.Img alt="Dog" src={DogImg} />
        <S.H1>Página não encontrada</S.H1>
        <S.LinkPage to="/">Página Inicial</S.LinkPage>
      </S.Main>
    </S.MainContainer>
  );
};

export default NotFound;
