import { forwardRef, useState } from "react";
import * as S from "./styles";

type TextFormFieldProps = {
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
};

type Ref = HTMLInputElement;

export const TextFormField = forwardRef<Ref, TextFormFieldProps>(
  (props, ref) => {
    const [seePassword, setSeePassword] = useState(false);
    return (
      <S.Container>
        <S.FieldLabelContainer>
          <S.Label htmlFor={props.name}>{props.name}</S.Label>
          <S.FieldContainer>
            <S.Input
              ref={ref}
              name={props.name}
              type={!seePassword ? props.type : "text"}
              placeholder={props.placeholder}
            />
            {props.type === "password" && (
              <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? (
                  <S.SeePasswordIcon />
                ) : (
                  <S.DontSeePasswordIcon />
                )}
              </S.IconContainer> // TODO: perdendo foco do formulário ao clicar no icone
            )}
          </S.FieldContainer>
        </S.FieldLabelContainer>
      </S.Container>
    );
  }
);
