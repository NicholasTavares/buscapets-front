import { forwardRef, useState } from "react";
import * as S from "./styles";

type TextFormFieldProps = {
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  error?: string;
  required: boolean;
  minLength?: number;
  pattern?: string;
  patternMessage?: string;
  paste?: boolean;
  showLabel?: boolean;
};

type Ref = HTMLInputElement;

export const TextFormField = forwardRef<Ref, TextFormFieldProps>(
  ({ name, type, placeholder, error, required, minLength, pattern, patternMessage, paste = true, showLabel = true }, ref) => {
    const [seePassword, setSeePassword] = useState(false);
    return (
      <S.Container>
        <S.FieldLabelContainer>
          {showLabel && <S.Label htmlFor={name}>{name}</S.Label>}
          <S.FieldContainer>
            <S.Input
              ref={ref}
              name={name}
              type={!seePassword ? type : "text"}
              placeholder={placeholder}
              required={required}
              minLength={minLength}
              pattern={pattern}
              title={patternMessage}
            />
            {type === "password" && (
              <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? (
                  <S.SeePasswordIcon />
                ) : (
                  <S.DontSeePasswordIcon />
                )}
              </S.IconContainer>
            )}
          </S.FieldContainer>
          <S.FieldError>{error}</S.FieldError>
        </S.FieldLabelContainer>
      </S.Container>
    );
  }
);
