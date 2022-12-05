import { forwardRef } from "react";
import * as S from "./styles";

type TextFormFieldProps = {
  name: string;
  placeholder: string;
};

type Ref = HTMLTextAreaElement;

export const TextAreaFormField = forwardRef<Ref, TextFormFieldProps>(
  (props, ref) => {
    return (
      <S.Container>
        <S.FieldLabelContainer>
          <S.Label htmlFor={props.name}>{props.name}</S.Label>
          <S.Input
            ref={ref}
            name={props.name}
            placeholder={props.placeholder}
            cols={60}
            rows={5}
          />
        </S.FieldLabelContainer>
      </S.Container>
    );
  }
);
