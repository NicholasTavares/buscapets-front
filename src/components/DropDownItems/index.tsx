import * as S from "./styles";
import { List, SignIn, SquaresFour } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export const DropDownItems = () => {
  const [open, setOpen] = useState(false);
  const { state, setState } = useAuth();
  const logout = () => {
    localStorage.removeItem('jwt');
    setState({ auth: false });
  };
  return (
    <S.Button>
      <List size={20} onClick={() => setOpen(!open)} />
      <S.Container open={open}>
        <S.ContainerOptions>
          { state.auth ? 
            <S.Option onClick={() => logout()} to="/login">
              <SignIn size={18} weight="light" />
                Sair
            </S.Option> :
            <S.Option to="/login">
              <SignIn size={18} weight="light" />
              Entrar
            </S.Option>
          }
          <S.Option to="/">
            <SquaresFour size={18} weight="light" />
            Minhas publicações
          </S.Option>
          {/* <S.Option to="/">
            <Dog size={18} weight="light" />
            Petshops
          </S.Option>
          <S.Option to="/">
            <Info size={18} weight="light" />
            Ajuda
          </S.Option> */}
        </S.ContainerOptions>
      </S.Container>
    </S.Button>
  );
};
