import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContainerContent = styled.main`
  display: flex;
  position: relative;
  min-height: 100vh;
`;

export const ContainerPublications = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;

  ${media.greaterThan("medium")`
    width: 50%;
    border-right: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  `}
`;

export const ContainerFilterPublications = styled.div`
  //TODO: adicionar box-shadow ao fazer scroll para baixo
  padding: 1.5rem;
  display: flex;
  position: sticky;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
  top: 6rem;
  z-index: 20;
  justify-content: space-between;
  align-items: center;

  ${media.greaterThan("medium")`
    top: 8rem;
    padding: 2rem;
  `}
`;

export const ContainerFilterPublicationInput = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 24rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};

  ${media.greaterThan("large")`
    width: 31rem;
  `}
`;

export const FilterPublicationInput = styled.input`
  outline: none;
  border: none;
  width: 85%;
  font-size: 1.2rem;
  background-color: transparent;

  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

export const SubmitFilterPublicationButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    color: ${({ theme }) => theme.colors["lime/500"]};
  }
`;

export const FilterPublicationsButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  color: ${({ theme }) => theme.colors["gray/900"]};
  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  & > svg {
    transform: rotate(90deg);
    margin-right: 0.5rem;
  }
`;

export const ContainerPublicationsContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const ContainerPublicationQtdResult = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PublicationQtdResult = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray/900"]};
`;

export const PublicationsGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));

  ${media.greaterThan("large")`
    grid-gap: 3rem;
  `}
`;
