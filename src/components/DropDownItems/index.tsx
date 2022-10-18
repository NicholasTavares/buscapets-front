import * as S from "./styles";
import { Dog, Info, List, SignIn, SquaresFour } from "phosphor-react";
import { useState } from "react";

export const DropDownItems = () => {
  const [open, setOpen] = useState(false);
  return (
    <S.Button>
      <List size={20} onClick={() => setOpen(!open)} />
      <S.Container open={open}>
        <S.ContainerOptions>
          <S.Option>
            <SignIn size={18} weight="light" />
            Entrar
          </S.Option>
          <S.Option>
            <SquaresFour size={18} weight="light" />
            Minhas publicações
          </S.Option>
          <S.Option>
            <Dog size={18} weight="light" />
            Petshops
          </S.Option>
          <S.Option>
            <Info size={18} weight="light" />
            Ajuda
          </S.Option>
        </S.ContainerOptions>
      </S.Container>
    </S.Button>
  );
};
