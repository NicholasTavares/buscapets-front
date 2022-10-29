import logoDark from "../../assets/buscapets-logo-dark.png";
import googleIcon from "../../assets/google-icon.png";
import * as S from './styles';


export const Login = () => {
  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo alt="Logo" src={logoDark}  />
      </S.ContainerLogo>

      <S.MainContainer>
        <S.WelcomeText>Bem vindo!</S.WelcomeText>
        <S.GoogleLogInButton>
          <S.GoogleIcon alt="google icon" src={googleIcon} />
          <S.GoogleLogInButtonText>Log in with Google</S.GoogleLogInButtonText>
        </S.GoogleLogInButton>
        <S.ContainerOrText>
          <S.OrText>ou</S.OrText>
        </S.ContainerOrText>
        <S.LogInForm>
          <S.LogInMailContainer>
            <S.LogInMailInput placeholder="Email"/>
          </S.LogInMailContainer>
          <S.LogInPasswordContainer>
            <S.LogInPasswordInput placeholder="Senha"/>
          </S.LogInPasswordContainer>
          <S.LogInLinkContainer>
            <S.LabelCheckBox>
            <S.CheckBoxRememberPassword type="checkbox"/>
              <S.LabelCheckBoxText>
                Lembrar senha
              </S.LabelCheckBoxText>
            </S.LabelCheckBox>
            <S.ForgetPasswordLink to={""}>
              esqueci minha senha
            </S.ForgetPasswordLink>
          </S.LogInLinkContainer>
          <S.LogInButton>Entrar</S.LogInButton>
          <S.RegisterLinkContainer>
            <S.RegisterLinkText>Não tem uma conta?</S.RegisterLinkText>
            <S.RegisterLink to=''>Registre-se de graça</S.RegisterLink>
          </S.RegisterLinkContainer>
        </S.LogInForm>
      </S.MainContainer>
    </S.Container>
  )
}