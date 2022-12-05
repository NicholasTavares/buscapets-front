import { Plus } from "phosphor-react";
import { createRef, FormEvent } from "react";
import { DateFormField } from "../../components/DateFormField";
import Places from "../../components/Map";
import { Navbar } from "../../components/Navbar";
import { PhotoFormField } from "../../components/PhotoFormField";
import { RadioCoupleFormField } from "../../components/RadioCoupleFormField";
import { TextAreaFormField } from "../../components/TextAreaFormField";
import { TextFormField } from "../../components/TextFormField";
import * as S from "./styles";

const Publish = () => {
  const inputRefPhoto = createRef<HTMLInputElement>();
  const inputRefTitle = createRef<HTMLInputElement>();
  const inputRefTextArea = createRef<HTMLTextAreaElement>();
  const inputRefPetName = createRef<HTMLInputElement>();
  const inputRefType = createRef<HTMLInputElement>();
  const inputRefSex = createRef<HTMLInputElement>();
  const inputRefDisappearanceDate = createRef<HTMLInputElement>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <S.Container>
      <Navbar />
      <S.PageTitle>Cadastrar uma publicação</S.PageTitle>
      <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
        <S.FormFields>
          <S.ContainerFormPartOne>
            <S.FormFieldTitle>Foto</S.FormFieldTitle>
            <PhotoFormField
              name="publication_pictures"
              ref={inputRefPhoto}
              alt="Ícone de adicionar foto com um desenho de um cachorro."
            />

            <TextFormField
              type="text"
              name="Título"
              placeholder="Gatinho perdido"
              ref={inputRefTitle}
            />

            <TextAreaFormField
              name="Descrição"
              placeholder="Meu gato estava comigo, viu um cachorro, se assutou e se perdeu..."
              ref={inputRefTextArea}
            />
          </S.ContainerFormPartOne>

          <S.ContainerFormPartTwo>
            <TextFormField
              type="text"
              name="Nome do pet"
              placeholder="Bob"
              ref={inputRefPetName}
            />

            <S.FormFieldTitle>Tipo da publicação</S.FormFieldTitle>
            <RadioCoupleFormField
              optionName="type"
              optionOneLabel="Perdido(a)"
              optionOneValue="missing"
              optionTwoLabel="Adoção"
              optionTwoValue="adoption"
              ref={inputRefType}
            />

            <S.FormFieldTitle>Sexo do pet</S.FormFieldTitle>
            <RadioCoupleFormField
              optionName="sex"
              optionOneLabel="Macho"
              optionOneValue="male"
              optionTwoLabel="Fêmea"
              optionTwoValue="female"
              ref={inputRefSex}
            />

            <S.FormFieldTitle>
              Data de desaparecimento ou adoção
            </S.FormFieldTitle>
            <DateFormField
              name="disappearance_date"
              ref={inputRefDisappearanceDate}
            />
          </S.ContainerFormPartTwo>
          <S.ContainerFormPartThree>
            <S.FormFieldMap>
              <S.FormFieldTitle>Última localização do pet</S.FormFieldTitle>
              <S.ContainerMap>
                <Places form={true} />
              </S.ContainerMap>
            </S.FormFieldMap>
          </S.ContainerFormPartThree>
        </S.FormFields>
      </S.FormContainer>
    </S.Container>
  );
};

export default Publish;
