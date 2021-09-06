import * as S from './styles'

const bla = 'var'

const Main = () => (
  <S.Wrapper>
    <S.ContainerLogo>
      <S.Logo
        src="/img/atomo_react.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.LogoWrapper>
        <S.Title>Boilerplate React</S.Title>
        <S.Author>Create by: Thiago Borges Siqueira</S.Author>
      </S.LogoWrapper>
    </S.ContainerLogo>
    <S.Description>TypeScript, ReactJS e Styled Components</S.Description>
    <S.Illustration
      src="/img/developer.jpeg"
      alt="Um desenvolvedor de frente para uma tela com código"
    ></S.Illustration>
  </S.Wrapper>
)
export default Main
