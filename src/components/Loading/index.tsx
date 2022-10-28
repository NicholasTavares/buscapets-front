import * as S from "./styles";

type LoadingProps = {
  center?: boolean;
};

export const Loading = ({ center }: LoadingProps) => {
  return (
    <S.Container center={center}>
      <S.Loading />
    </S.Container>
  );
};
