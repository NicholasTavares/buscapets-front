import { forwardRef } from "react";
import * as S from "./styles";

type TextAreaFormFieldProps = {
	name: string;
	placeholder: string;
	error?: string;
	required: boolean;
	minLength?: number;
};

type Ref = HTMLTextAreaElement;

export const TextAreaFormField = forwardRef<Ref, TextAreaFormFieldProps>(
	({ name, placeholder, error, required, minLength }, ref) => {
		return (
			<S.Container>
				<S.FieldLabelContainer>
					<S.Label htmlFor={name}>{name}</S.Label>
					<S.FieldContainer>
						<S.Input
							ref={ref}
							name={name}
							placeholder={placeholder}
							required={required}
							rows={10}
							cols={40}
						/>
					</S.FieldContainer>
					<S.FieldError>{error}</S.FieldError>
				</S.FieldLabelContainer>
			</S.Container>
		);
	}
);
