import { forwardRef, useState, ChangeEvent } from "react";
import * as S from "./styles";

type ImageFormFieldProps = {
    name: string;
    error?: string;
    required: boolean;
};

type Ref = HTMLInputElement;

export const ImageFormField = forwardRef<Ref, ImageFormFieldProps>(
    ({ name, error, required }, ref) => {
        const [image, setImage] = useState<string | null>(null);

        const PreviewImage = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.currentTarget.files && e.currentTarget.files.length) {
                const [file] = e.currentTarget.files
                setImage(URL.createObjectURL(file))
            }
        }

        return (
            <S.Container>
                <S.FieldLabelContainer>
                    <S.Label htmlFor='imagePreview'>
                        {image ? <S.ImagePreview imageUrl={image} /> : <S.AddImageIcon size={20} weight="bold" />}
                    </S.Label>
                    <S.FieldContainer>
                        <S.Input
                            id='imagePreview'
                            ref={ref}
                            name={name}
                            accept="image/*"
                            type="file"
                            required={required}
                            onChange={(e) => PreviewImage(e)}
                        />
                    </S.FieldContainer>
                    <S.FieldError>{error}</S.FieldError>
                </S.FieldLabelContainer>
            </S.Container>
        );
    }
);
