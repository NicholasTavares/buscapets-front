import { forwardRef } from "react";
import * as S from "./styles";

type TextFormFieldProps = {
    name: string;
    error?: string;
    required: boolean;
    minLength?: number;
    pattern?: string;
    patternMessage?: string;
    paste?: boolean;
};

type Ref = HTMLInputElement;

export const DateFormField = forwardRef<Ref, TextFormFieldProps>(
    ({ name, error, required, minLength, pattern, patternMessage }, ref) => {
        return (
            <S.Container>
                <S.FieldLabelContainer>
                    <S.Label htmlFor={name}>{name}</S.Label>
                    <S.FieldContainer>
                        <S.Input
                            ref={ref}
                            name={name}
                            type="date"
                            required={required}
                            minLength={minLength}
                            pattern={pattern}
                            title={patternMessage}
                        />
                    </S.FieldContainer>
                    <S.FieldError>{error}</S.FieldError>
                </S.FieldLabelContainer>
            </S.Container>
        );
    }
);
