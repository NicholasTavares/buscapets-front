import { memo } from "react";
import * as S from "./styles";

type PublicationPreviewProps = {
  id: string;
  title: string;
  description: string;
  tag: string;
  image_url: string;
  address: string;
  created_at: string;
  setShowInfoPopById: (value: string | null) => void;
};

const PublicationPreview = ({
  id,
  title,
  description,
  tag,
  image_url,
  address,
  created_at,
}: PublicationPreviewProps) => {
  const createdDate = new Date(created_at).toLocaleDateString("pt-br");
  const formated_tag = tag === "missing" ? "perdido" : "adoção";
  return (
    <S.Container type={tag}>
      <S.PublicationImage to={`/publication/${id}`} imageUrl={image_url}>
        <S.Tag type={tag}>{formated_tag}</S.Tag>
      </S.PublicationImage>
      <S.ContainerPublicationsDetails>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Address>{address}</S.Address>
        <S.ContainerPublicationDate>
          <S.PublicationDate>
            Publicado em{" "}
            <S.PublicationDateBold>{createdDate}</S.PublicationDateBold>
          </S.PublicationDate>
        </S.ContainerPublicationDate>
      </S.ContainerPublicationsDetails>
    </S.Container>
  );
};

export default memo(PublicationPreview);
