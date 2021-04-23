import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #81d6fa;
  color: #000;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-aling: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 12rem;
  margin-bottom: 2rem;
`

export const LogoWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 5rem;
  padding: 0rem 0rem 0rem 1.5rem;
`

export const Author = styled.h6`
  padding-left: 1.5rem;
  font-size: 1.1rem;
  color: green;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 420;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(40rem, 100%);
`
