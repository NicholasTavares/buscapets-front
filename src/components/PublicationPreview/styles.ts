import styled from "styled-components";

type PublicationImageProps = {
  imageUrl: string;
};

type PublicationTypeProps = {
  type: string;
};

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const PublicationImage = styled.div<PublicationImageProps>`
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 22rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.div<PublicationTypeProps>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 0.8rem;
  font-weight: 400;
  border-radius: 2rem;
  border: 3px solid
    ${({ type, theme }) =>
      type === "missing" ? theme.colors["gray/500"] : theme.colors["rose/600"]};
  color: ${({ theme }) => theme.colors["gray/800"]};
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.white}; ;
`;

export const ContainerPublicationsDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;

export const Description = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 3; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;

export const Address = styled.span`
  margin-top: 1rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors["lime/600"]};
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 2; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;

export const ContainerPublicationDate = styled.div`
  display: flex;
  justify-content: left;
`;

export const PublicationDate = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors["gray/500"]};
`;

export const PublicationDateBold = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors["gray/500"]};
  font-weight: bold;
`;