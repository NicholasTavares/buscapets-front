import { createRef, FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RegisterUserPost } from "../../api/registerUserAPI";
import { TextFormField } from "../../components/TextFormField";
import * as Assets from '../../assets/index'
import * as S from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErros] = useState<{ response: { data: { message: string, statusCode: number } } } | null>(null)
  const inputRefName = createRef<HTMLInputElement>();
  const inputRefEmail = createRef<HTMLInputElement>();
  const inputRefPhone = createRef<HTMLInputElement>();
  const inputRefPassword = createRef<HTMLInputElement>();
  const inputRefPasswordConfirm = createRef<HTMLInputElement>();
  const { mutate, isLoading } = useMutation(RegisterUserPost, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: any) => {
      setErros(error);
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRefName.current?.value && inputRefEmail.current?.value && inputRefPassword.current?.value &&
      inputRefPassword.current?.value && inputRefPhone.current?.value && inputRefPasswordConfirm.current?.value) {
      mutate({
        name: inputRefEmail.current.value,
        email: inputRefEmail.current.value,
        phone: inputRefPhone.current.value,
        password: inputRefPassword.current.value,
        passwordConfirm: inputRefPasswordConfirm.current.value,
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
          <S.WelcomeText>Registrar conta!</S.WelcomeText>
          <S.FormContainer onSubmit={(e) => handleSubmit(e)}>
            <TextFormField
              name="Nome"
              placeholder="Maria Antonieta"
              type="text"
              ref={inputRefName}
              required={true}
              minLength={4}
            />
            <TextFormField
              name="Email"
              placeholder="maria@email.com"
              type="email"
              ref={inputRefEmail}
              error={(errors?.response.data.statusCode === 409) ? "Endereço de email já está em uso" : undefined}
              required={true}
            />
            <TextFormField
              name="Telefone"
              placeholder="84 9 8888-8888"
              type="text"
              ref={inputRefPhone}
              required={true}
              minLength={11}
            />
            <TextFormField
              name="Senha"
              placeholder="***********"
              type="password"
              ref={inputRefPassword}
              required={true}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,30}$"
              patternMessage="Senha deve ter no mínimo 6 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais"
            />
            <TextFormField
              name="Confirmação senha"
              placeholder="***********"
              type="password"
              ref={inputRefPasswordConfirm}
              error={(errors?.response.data.statusCode === 400) ? "Senhas não são iguais" : undefined}
              paste={false}
              required={true}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,30}$"
              patternMessage="Senha deve ter no mínimo 6 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais"
            />
            <S.LogInLinkContainer>
            </S.LogInLinkContainer>
            <S.SubmitButton type="submit">Registrar conta</S.SubmitButton>
            <S.LoginLinkContainer>
              <S.LoginLinkText>Já tem uma conta?</S.LoginLinkText>
              <S.LoginLinkImgContainer>
                <S.LoginLink to="/login">Fazer o login</S.LoginLink>
                <S.ImgVector
                  src={Assets.ForgotPasswordVector}
                  alt="Imagem de risco indicando o botão de registrar o usuário acima"
                />
              </S.LoginLinkImgContainer>
            </S.LoginLinkContainer>
          </S.FormContainer>
        </S.MainContainer>
      </S.ContainerIllustrationForm>
    </S.Container>
  );
};

export default Register;
