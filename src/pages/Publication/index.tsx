import { FormEvent, createRef } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar'
import { publicationGet } from '../../api/publicationAPI';
import { useMutation, useQuery } from 'react-query';
import { Loading } from '../../components/Loading';
import { Comment } from '../../components/Comment';
import { TextFormField } from '../../components/TextFormField';
import { commentPost } from '../../api/commentsAPI';
import { useAuth } from '../../hooks/useAuth';
import * as S from './styles'

const Publication = () => {
    const { state, setState } = useAuth();
    const { publication_id } = useParams();
    const { data: publication, isFetching } = useQuery(["publication", publication_id], () => publicationGet(publication_id));
    const inputRefImage = createRef<HTMLInputElement>();

    const { mutate } = useMutation(commentPost);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRefImage.current?.value && publication?.id && state.auth) {
            mutate({
                publication_id: publication.id,
                comment: inputRefImage.current.value,
                token: state.auth
            });
        }
    };

    return (
        <S.Container>
            <Navbar />
            <S.ContainerContent>
                {(isFetching || !publication) ?
                    <Loading /> :
                    <>
                        <S.ContainerPublication>
                            <S.PublicationDataContainer>
                                <S.PublicationImageContainer type={publication.type}>
                                    <S.PublicationImage imageUrl={publication.publication_pictures[0].publication_picture} />
                                </S.PublicationImageContainer>
                            </S.PublicationDataContainer>
                            <S.MoreInformationContainer>
                                <S.PublicationTitle>{publication.title}</S.PublicationTitle>
                                <S.TagsContainer>
                                    <S.Tag type={publication.type}>{publication.type === 'missing' ? 'perdido' : 'adoção'}</S.Tag>
                                    <S.Tag type={publication.sex}>{publication.sex === 'male' ? 'macho' : 'feminino'}</S.Tag>
                                </S.TagsContainer>
                                <S.DescriptionContainer>
                                    Por <S.Owner>{publication.user.name}</S.Owner>:
                                    <S.Description>{publication.description}</S.Description>
                                </S.DescriptionContainer>
                                <S.InformationContainer>
                                    <S.InformatioTopic>Nome do pet:</S.InformatioTopic>
                                    <S.Information>{publication.pet_name}</S.Information>
                                </S.InformationContainer>

                                {publication.type === 'missing' &&
                                    <S.InformationContainer>
                                        <S.InformatioTopic>Data de desaparecimento:</S.InformatioTopic>
                                        <S.Information>{new Date(publication.disappearance_date).toLocaleDateString("pt-br")}</S.Information>
                                    </S.InformationContainer>}

                                <S.InformationContainer>
                                    <S.InformatioTopic>Data de publicação:</S.InformatioTopic>
                                    <S.Information>{new Date(publication.created_at).toLocaleDateString("pt-br")}</S.Information>
                                </S.InformationContainer>

                                <S.InformationContainer>
                                    <S.Information>{publication.address}</S.Information>
                                </S.InformationContainer>
                            </S.MoreInformationContainer>
                        </S.ContainerPublication>
                        <S.CommentsContainer>
                            <S.CommentsCount>Comentários ({publication.comments.length})</S.CommentsCount>
                            <S.FormComment onSubmit={(e) => handleSubmit(e)}>
                                <TextFormField
                                    showLabel={false}
                                    name="Comentario"
                                    placeholder="Adicionar um comentário..."
                                    type="text"
                                    ref={inputRefImage}
                                    required={true}
                                    minLength={4}
                                />
                                <S.AddCommentButton>Comentar</S.AddCommentButton>
                            </S.FormComment>

                            {publication.comments.length && !isFetching && (
                                publication.comments.map((comment) => (
                                    <Comment author={comment.user.name} comment={comment.comment} created_at={comment.created_at} />
                                ))
                            )}
                        </S.CommentsContainer>
                    </>
                }
            </S.ContainerContent>
        </S.Container>
    )
}

export default Publication;