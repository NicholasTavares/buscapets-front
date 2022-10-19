import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const ContainerPublications = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ContainerFilterPublications = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 2rem 0;
`;

export const ContainerFilterPublicationInput = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 24rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
`;

export const FilterPublicationInput = styled.input`
  outline: none;
  border: none;
  width: 85%;
  font-size: 1.2rem;
  background-color: transparent;
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
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`;
