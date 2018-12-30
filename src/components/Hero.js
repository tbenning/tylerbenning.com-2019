import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

const HeroContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 60px 0 80px 0;
`
const LeftDiv = styled.div`
  max-width: 480px;
`

const RightDiv = styled.div``

const Subheading = styled.p`
  font-family: 'IBM Plex Sans', sans serif;
  line-height: 1.65;
  font-size: 24px;
  color: ${colors.ink80};
`

const Heading = styled.h1`
  font-size: 52px;
`

const Button = styled.button`
  background: #49f2e7;
  color: #004a54;
  padding: 20px 44px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.05), 0 10px 10px hsla(0, 0%, 0%, 0.05),
    inset 0 1px 0 hsl(177, 29%, 93%);
  transition: ease-in-out 0.2s;

  &:hover {
    background: #41d9cf;
    text-decoration: none;
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.05),
      0 14px 16px hsla(0, 0%, 0%, 0.07);
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #009191;
  }

  &:active {
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  }
`

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <LeftDiv>
          <Heading>Hi, I'm Tyler</Heading>
          <Subheading>I'm a product designer living in Toronto 🍁</Subheading>
          <Button>See Work Projects</Button>
        </LeftDiv>
      </HeroContainer>
    )
  }
}

export default Hero
