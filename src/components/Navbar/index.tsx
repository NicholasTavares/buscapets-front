import { DropDownItems } from "../DropDownItems";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";
import * as Assets from "../../assets/index";

export const Navbar = () => {
  const { state, setState } = useAuth();
  const logout = () => {
    localStorage.removeItem('jwt');
    setState({ auth: false });
  };
  return (
    <S.Container>
      <DropDownItems />
      <S.LogoContainer to="/">
        <S.Logo
          src={Assets.LogoDark}
          alt="Logomarca do Buscapets com uma lupa e nome buscapets"
        />
      </S.LogoContainer>
      <S.ContainerButtons>
        {/* <S.TextButton>Ajuda</S.TextButton>
        <S.TextButton>
          <PawPrint size={20} weight="regular" /> <S.Text>Petshops</S.Text>
        </S.TextButton> */}
        <S.TextButton>Minhas publicações</S.TextButton>
        <S.PublishButton>+ Publicar</S.PublishButton>
        {state.auth ? <S.LogOutButton onClick={() => logout()} to="/login">Sair</S.LogOutButton> : <S.SignInButton to="/login">Entrar</S.SignInButton>}
        
      </S.ContainerButtons>
    </S.Container>
  );
};
