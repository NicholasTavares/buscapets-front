import { useLocation } from 'react-router-dom';
import { DropDownItems } from "../../components/DropDownItems";
import { useAuth } from "../../hooks/useAuth";
import * as Assets from "../../assets/index";
import * as S from "./styles";

export const Navbar = () => {
  const { state, setState } = useAuth();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem('jwt');
    setState({ ...state, auth: false });
  };
  return (
    <S.Container>
      <DropDownItems />
      <S.LogoContainer to="/">
        <S.Logo
          src={Assets.GoogleIcon}
          alt="Logomarca do Buscapets com uma lupa e nome buscapets"
        />
      </S.LogoContainer>
      <S.ContainerButtons>
        {/* <S.TextButton>Ajuda</S.TextButton>
        <S.TextButton>
          <PawPrint size={20} weight="regular" /> <S.Text>Petshops</S.Text>
        </S.TextButton> */}
        <S.TextButton>Minhas publicações</S.TextButton>
        {location.pathname !== '/publish' && <S.PublishButton to="/publish">+ Publicar</S.PublishButton>}
        {state.auth ? <S.LogOutButton onClick={() => logout()} to="/login">Sair</S.LogOutButton> : <S.SignInButton to="/login">Entrar</S.SignInButton>}

      </S.ContainerButtons>
    </S.Container>
    

  );
};
