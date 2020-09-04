import React from 'react'
import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo src="/img/icon-192.png" alt="Atom image" />
        <S.Title data-testid="title">Won-Games</S.Title>
      </S.LogoWrapper>
      <S.Description>A simple boilerplate to work with Typescript, React, NextJs and Styled Components</S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="Person on a computer" />
    </S.Wrapper>
  )
}

export default Main
