import { forwardRef } from "react";
import * as S from "./styles";

type RadioCoupleFormFieldProps = {
  optionName: string;
  optionOneValue: string;
  optionOneLabel: string;
  optionTwoValue: string;
  optionTwoLabel: string;
};

type Ref = HTMLInputElement;

export const RadioCoupleFormField = forwardRef<Ref, RadioCoupleFormFieldProps>(
  (props, ref) => {
    return (
      <S.Container>
        <S.InputContainer>
          <S.InputLabel htmlFor={props.optionOneValue}>
            {props.optionOneLabel}
          </S.InputLabel>
          <S.InputRadio
            type="radio"
            value={props.optionOneValue}
            id={props.optionOneValue}
            name={props.optionName}
            ref={ref}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel htmlFor={props.optionTwoValue}>
            {props.optionTwoLabel}
          </S.InputLabel>
          <S.InputRadio
            type="radio"
            value={props.optionTwoValue}
            id={props.optionTwoValue}
            name={props.optionName}
            ref={ref}
          />
        </S.InputContainer>
      </S.Container>
    );
  }
);
