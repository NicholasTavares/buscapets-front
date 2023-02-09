import { useState } from "react";
import { Faders, MagnifyingGlass } from "phosphor-react";
import { Navbar } from "../../layout/Navbar";
import { Footer } from "../../layout/Footer";
import { usePublications } from "../../hooks/usePublications";
import PublicationPreview from "../../components/PublicationPreview";
import Places from "../../components/Map";
import data from './test.json'
import * as S from "./styles";

const Home = () => {
  const [showInfoPopById, setShowInfoPopById] = useState<string | null>(null); //TODO: colocar isso globalmente
  let { publications, isFetching } = usePublications();


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
                {publications?.length} pets encontrados na sua região
              </S.PublicationQtdResult>
            </S.ContainerPublicationQtdResult>

            <S.PublicationsGrid>
              {data.map((publication) => (
                <PublicationPreview
                  key={publication.id}
                  id={publication.id}
                  image_url={
                    publication.publication_pictures[0].publication_picture
                  }
                  tag={publication.type}
                  title={publication.title}
                  description={publication.description}
                  address={publication.address}
                  created_at={publication.created_at}
                  setShowInfoPopById={setShowInfoPopById}
                />
              ))}
            </S.PublicationsGrid>
          </S.ContainerPublicationsContent>

        </S.ContainerPublications>

        <Places places={publications} />

      </S.ContainerContent>
      <Footer />
    </S.Container>
  );
};

export default Home;