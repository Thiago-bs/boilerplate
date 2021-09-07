import * as S from './styles'

const Main = ({
  title = 'Template Maroto',
  creator = 'Thiago',
  desc = 'TypeScript, ReactJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.ContainerLogo>
      <S.Logo
        src="/img/atomo_react.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.LogoWrapper>
        <S.Title>{title}</S.Title>
        <S.Author>Create by: {creator}</S.Author>
      </S.LogoWrapper>
    </S.ContainerLogo>
    <S.Description>{desc}</S.Description>
    <S.Illustration
      src="/img/developer.jpeg"
      alt="Um desenvolvedor de frente para uma tela com código"
    ></S.Illustration>
  </S.Wrapper>
)
export default Main
