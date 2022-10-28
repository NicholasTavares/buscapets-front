import styled from "styled-components";

type PublicationImageProps = {
  imageUrl: string;
};

type PublicationTypeProps = {
  type: string;
};

export const ContainerPopUp = styled.div`
  display: flex;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreviewPublicationImage = styled.div<PublicationImageProps>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 8rem;
  width: 8rem;
  border-radius: 1.5rem;
  margin-right: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  max-width: 12rem;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 3; // Quantidade de linhas
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors["gray/900"]};
`;

export const Tag = styled.div<PublicationTypeProps>`
  margin-top: auto;
  width: fit-content;
  padding: 0.3rem 0.75rem;
  font-weight: 400;
  border-radius: 2rem;
  border: 2px solid
    ${({ type, theme }) =>
      type === "missing" ? theme.colors["gray/500"] : theme.colors["rose/600"]};
  color: ${({ theme }) => theme.colors["gray/800"]};
  font-size: 1.05rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
