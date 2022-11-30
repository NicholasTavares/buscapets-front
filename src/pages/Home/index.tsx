import { Faders, MagnifyingGlass } from "phosphor-react";
import { Navbar } from "../../components/Navbar";
import PublicationPreview from "../../components/PublicationPreview";
import teste_data from "./test.json";
import * as S from "./styles";
import Places from "../../components/Map";
import { useState } from "react";

const Home = () => {
  const [showInfoPopById, setShowInfoPopById] = useState<string | null>(null); //TODO: colocar isso globalmente
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
              {teste_data.map((publication) => (
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

        <Places places={teste_data} />
      </S.ContainerContent>
    </S.Container>
  );
};

export default Home;