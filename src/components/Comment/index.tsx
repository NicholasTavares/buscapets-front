import * as S from './styles'

type CommentProps = {
    author: string;
    comment: string;
    created_at: string;
}

export const Comment = ({ author, comment, created_at }: CommentProps) => {
    return (
        <S.Container>
            <S.ContainerAuthor>
                <S.Author>{author}</S.Author>
                <S.Date>{new Date(created_at).toLocaleDateString("pt-br")}</S.Date>
            </S.ContainerAuthor>
            <S.Comment>{comment}</S.Comment>
        </S.Container>
    )
}