import { Faders, MagnifyingGlass } from "phosphor-react";
import { Navbar } from "../../components/Navbar";
import PublicationPreview from "../../components/PublicationPreview";
import * as S from "./styles";
import Places from "../../components/Map";
import { useState } from "react";
import { usePublications } from "../../hooks/usePublications";

const Home = () => {
  const [showInfoPopById, setShowInfoPopById] = useState<string | null>(null); //TODO: colocar isso globalmente
  const { publications, isFetching } = usePublications();
  return (
    <S.Container>
      <Navbar />
      <S.ContainerContent>
        <S.ContainerPublications>
          <S.ContainerFilterPublications>
            <S.ContainerFilterPublicationInput>
              <S.FilterPublicationInput placeholder="Procure uma publicação..." />
              <S.SubmitFilterPublicationButton>
                <MagnifyingGlass size={20} weight="regular" />
              </S.SubmitFilterPublicationButton>
            </S.ContainerFilterPublicationInput>

            <S.FilterPublicationsButton>
              <Faders size={20} weight="regular" />
              Filtros
            </S.FilterPublicationsButton>
          </S.ContainerFilterPublications>

          <S.ContainerPublicationsContent>
            <S.ContainerPublicationQtdResult>
              <S.PublicationQtdResult>
                20 pets encontrados na sua região
              </S.PublicationQtdResult>
            </S.ContainerPublicationQtdResult>

            <S.PublicationsGrid>
              {(!isFetching && publications?.length) && publications.map((publication) => (
                <PublicationPreview
                  key={publication.id}
                  id={publication.id}
                  image_url={
                    publication.publication_pictures[0].publication_picture
                  }
                  tag={publication.type}
                  title={publication.title}
                  description={publication.description}
                  address="Natal/RN - R. Jaguarari, 1826 - Lagoa Nova"
                  created_at={publication.created_at}
                  setShowInfoPopById={setShowInfoPopById}
                />
              ))}
            </S.PublicationsGrid>
          </S.ContainerPublicationsContent>
        </S.ContainerPublications>

        {(!isFetching && publications?.length) && <Places places={publications} />}
      </S.ContainerContent>
    </S.Container>
  );
};

export default Home;