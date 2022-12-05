import { ChangeEvent, forwardRef, useState } from "react";
import { Plus } from "phosphor-react";
import * as S from "./styles";

type PhotoFormFieldProps = {
  name: string;
  alt: string;
};

type Ref = HTMLInputElement;

export const PhotoFormField = forwardRef<Ref, PhotoFormFieldProps>(
  (props, ref) => {
    const [photo, setPhoto] = useState<string | null>(null);
    const handleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files?.length) {
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhoto(reader.result as string);
        };
        reader.readAsDataURL(image);
      }
    };
    return (
      <S.PhotoFieldContainer>
        <S.PhotoField htmlFor={props.name}>
          {photo ? (
            <S.PhotoPreview imageUrl={photo} />
          ) : (
            <Plus size={32} weight="thin" alt={props.alt} />
          )}
        </S.PhotoField>
        <S.PhotoInput
          type="file"
          name={props.name}
          id={props.name}
          onChange={(e) => handleImagePreview(e)}
          ref={ref}
          hidden={true}
          accept="image/png, image/jpeg, image/webp"
        />
      </S.PhotoFieldContainer>
    );
  }
);
