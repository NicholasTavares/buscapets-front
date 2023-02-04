import { createRef, FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/services/auth";
import { TextFormField } from "../../components/Forms/TextFormField";
import { useAuth } from "../../hooks/useAuth";
import * as Assets from '../../assets/index'
import * as S from "./styles";

const Login = () => {
  const { state, setState } = useAuth();
  const navigate = useNavigate();
  const inputRefEmail = createRef<HTMLInputElement>();
  const inputRefPassword = createRef<HTMLInputElement>();
  const { mutate, isLoading } = useMutation(signIn, {
    onSuccess: ({ token }) => {
      localStorage.setItem("jwt", token);
      setState({ ...state, auth: token });
      navigate("/");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRefEmail.current?.value && inputRefPassword.current?.value) {
      mutate({
        email: inputRefEmail.current.value,
        password: inputRefPassword.current.value,
      });
    }
  };
  return (
    <S.Container>
      <S.ContainerLogo>
        <S.LogoContainer to="/">
          <S.Logo alt="Logo" src={Assets.LogoDark} />
        </S.LogoContainer>
      </S.ContainerLogo>

      <S.ContainerIllustrationForm>
        <S.ContainerIllustration>
          <S.Illustration
            src={Assets.DogWalkingIcon}
            alt="Imagem de homem passeando com cachorro com uma árvores atrás"
          />
        </S.ContainerIllustration>
        <S.MainContainer>
          <S.WelcomeText>Bem vindo!</S.WelcomeText>
          <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
            <TextFormField
              name="Email"
              placeholder="maria@email.com"
              type="email"
              ref={inputRefEmail}
              required={true}
            />
            <TextFormField
              name="Senha"
              placeholder="***********"
              type="password"
              ref={inputRefPassword}
              required={true}
            />
            <S.SubmitButton>Entrar</S.SubmitButton>
            <S.RegisterLinkContainer>
              <S.RegisterLinkText>Não tem uma conta?</S.RegisterLinkText>
              <S.RegisterLinkImgContainer>
                <S.RegisterLink to="/register">Registre-se de graça</S.RegisterLink>
                <S.ImgVector
                  src={Assets.ForgotPasswordVector}
                  alt="Imagem de risco indicando o botão de registrar o usuário acima"
                />
              </S.RegisterLinkImgContainer>
            </S.RegisterLinkContainer>
          </S.FormContainer>
        </S.MainContainer>
      </S.ContainerIllustrationForm>
    </S.Container>
  );
};

export default Login;
