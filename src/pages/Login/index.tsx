import { createRef, FormEvent } from "react";
import { useMutation } from "react-query";
import { signInPost } from "../../api/signInAPI";
import logoDark from "../../assets/buscapets-logo-dark.png";
import googleIcon from "../../assets/google-icon.png";
import vector from "../../assets/vector-forgot-password.svg";
import { TextFormField } from "../../components/TextFormField";
import * as S from "./styles";

export const Login = () => {
  const inputRefEmail = createRef<HTMLInputElement>();
  const inputRefPassword = createRef<HTMLInputElement>();
  const { mutate, isLoading } = useMutation(signInPost, {
    onSuccess: ({ token }) => {
      console.log(token);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRefEmail.current?.value && inputRefPassword.current?.value) {
      mutate({
        email: inputRefEmail.current.value,
        password: inputRefPassword.current?.value,
      });
    }
  };
  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo alt="Logo" src={logoDark} />
      </S.ContainerLogo>

      <S.MainContainer>
        <S.WelcomeText>Bem vindo!</S.WelcomeText>
        <S.GoogleLogInButton>
          <S.GoogleIcon alt="Logotipo da google" src={googleIcon} />
          <S.GoogleLogInButtonText>Entrar com Google</S.GoogleLogInButtonText>
        </S.GoogleLogInButton>
        <S.ContainerOrText>
          <S.OrText>ou</S.OrText>
        </S.ContainerOrText>
        <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
          <TextFormField
            name="Email"
            placeholder="maria@email.com"
            type="email"
            ref={inputRefEmail}
          />
          <TextFormField
            name="Senha"
            placeholder="***********"
            type="password"
            ref={inputRefPassword}
          />
          <S.LogInLinkContainer>
            <S.ForgetPasswordLink to={""}>
              esqueci minha senha
            </S.ForgetPasswordLink>
          </S.LogInLinkContainer>
          <S.SubmitButton>Entrar</S.SubmitButton>
          <S.RegisterLinkContainer>
            <S.RegisterLinkText>Não tem uma conta?</S.RegisterLinkText>
            <S.RegisterLinkImgContainer>
              <S.RegisterLink to="">Registre-se de graça</S.RegisterLink>
              <S.ImgVector
                src={vector}
                alt="Image de risco indicando o botão de registrar o usuário acima"
              />
            </S.RegisterLinkImgContainer>
          </S.RegisterLinkContainer>
        </S.FormContainer>
      </S.MainContainer>
    </S.Container>
  );
};
