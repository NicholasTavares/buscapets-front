import { FormEvent, createRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Navbar } from '../../components/Navbar';
import { useMutation } from 'react-query';
import { publicationPost } from '../../api/publicationAPI';
import { useNavigate } from 'react-router-dom';
import { TextFormField } from '../../components/TextFormField';
import { TextAreaFormField } from '../../components/TextAreaFormField';
import { DateFormField } from '../../components/DateFormField';
import { ImageFormField } from '../../components/ImageFormField';
import MapAddress from '../../components/MapAddress';
import * as S from './styles'

const Publish = () => {
    const { state, setState } = useAuth();
    const navigate = useNavigate();
    const [errors, setErros] = useState<{ response: { data: { message: string, statusCode: number } } } | null>(null)
    const inputRefImage = createRef<HTMLInputElement>();
    const inputRefTitle = createRef<HTMLInputElement>();
    const inputRefName = createRef<HTMLInputElement>();
    const inputRefDate = createRef<HTMLInputElement>();
    const inputRefDescription = createRef<HTMLTextAreaElement>();
    const [inputSex, setInputSex] = useState<'male' | 'female' | null>(null);
    const [inputType, setInputType] = useState<'adoption' | 'missing' | null>(null);

    const { mutate, isLoading } = useMutation(publicationPost, {
        onSuccess: () => {
            navigate("/");
        },
        onError: (error: any) => {
            setErros(error);
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRefImage.current?.value && inputRefTitle.current?.value && inputRefName.current?.value
            && inputRefDate.current?.value && inputRefDescription.current?.value && inputSex && inputType
            && state.address && state.coordinates) {
            if (inputRefImage.current.files && inputRefImage.current.files.length) {
                const [file] = inputRefImage.current.files
                mutate({
                    title: inputRefTitle.current.value,
                    description: inputRefDescription.current.value,
                    address: state.address,
                    pet_name: inputRefName.current.value,
                    type: inputType,
                    sex: inputSex,
                    disappearance_date: inputRefDate.current.value,
                    last_location: [state.coordinates.lat, state.coordinates.lng],
                    publication_pictures: file,
                    token: state.auth,
                });
            }
        }
    };

    return (
        <S.Container>
            <Navbar />
            <S.ContainerContent>
                <S.FormContainer onSubmit={(e) => handleSubmit(e)}>

                    <S.SectionForm>
                        <S.PageTitle>
                            <S.Title>Cadastre seu pet!</S.Title>
                        </S.PageTitle>
                        <ImageFormField name="Foto" ref={inputRefImage} required={true} />
                        <TextFormField
                            name="Título"
                            placeholder="Gatinho perdido"
                            type="text"
                            ref={inputRefTitle}
                            required={true}
                            minLength={4}
                        />

                        <TextFormField
                            name="Nome do pet"
                            placeholder="Gato de Botas"
                            type="text"
                            ref={inputRefName}
                            required={true}
                            minLength={4}
                        />

                        <TextAreaFormField
                            name="Descrição"
                            placeholder="Meu gatinho sumiu..."
                            ref={inputRefDescription}
                            required={true}
                        />

                        <S.RadioButtonsContainer>

                            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '2rem' }}>
                                <S.FieldTitle>Sexo do seu pet</S.FieldTitle>
                                <S.RadioButtonContainer>
                                    <S.RadioButtonLabelInputContainer>
                                        <S.RadioButton type="radio" id='male' name="sex" onChange={() => setInputSex('male')} value="male" />
                                        <S.LabelRadioButton htmlFor='male'>Macho</S.LabelRadioButton>
                                    </S.RadioButtonLabelInputContainer>
                                    <S.RadioButtonLabelInputContainer>
                                        <S.RadioButton type="radio" id='female' name="sex" onChange={() => setInputSex('female')} value="female" />
                                        <S.LabelRadioButton htmlFor='female'>Fêmea</S.LabelRadioButton>
                                    </S.RadioButtonLabelInputContainer>
                                </S.RadioButtonContainer>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <S.FieldTitle>Escolha o tipo da publicação</S.FieldTitle>
                                <S.RadioButtonContainer>
                                    <S.RadioButtonLabelInputContainer>
                                        <S.RadioButton type="radio" id='adoption' name="type" onChange={() => setInputType('adoption')} value="adoption" />
                                        <S.LabelRadioButton htmlFor='adoption'>Adoção</S.LabelRadioButton>
                                    </S.RadioButtonLabelInputContainer>
                                    <S.RadioButtonLabelInputContainer>
                                        <S.RadioButton type="radio" id='missing' name="type" onChange={() => setInputType('missing')} value="missing" />
                                        <S.LabelRadioButton htmlFor='missing'>Perdido(a)</S.LabelRadioButton>
                                    </S.RadioButtonLabelInputContainer>
                                </S.RadioButtonContainer>
                            </div>

                        </S.RadioButtonsContainer>

                        <DateFormField name="Data de Adoção ou Desaparecimento"
                            ref={inputRefDate}
                            required={true}
                            minLength={4}
                        />
                        <S.SubmitButton type='submit'>Publicar</S.SubmitButton>
                    </S.SectionForm>

                    <S.SectionMap>
                        <MapAddress />
                    </S.SectionMap>

                </S.FormContainer>
            </S.ContainerContent>
        </S.Container>
    )
}

export default Publish;