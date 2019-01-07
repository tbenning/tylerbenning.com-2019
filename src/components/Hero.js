import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import hero from '../assets/hero.png'
import { HeroButton } from './HeroButton.js'

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 60px 0 20px 0;
  display: flex;
  justify-content: flex-start;
`
const LeftDiv = styled.div`
  width: 45%;
  max-width: 400px;
  display: inline;
`

const RightDiv = styled.div`
  width: 55%;

  img {
    width: 120%;
    max-width: 600px;
    margin-left: -40px;
    margin-top: -50px;
  }
`

const Subheading = styled.p`
  font-family: 'IBM Plex Sans', sans serif;
  line-height: 1.65;
  font-size: 24px;
  color: ${colors.ink80};
  @media (max-width: 1028px) {
    font-size: 18px;
  }
`

const Heading = styled.h1`
  font-size: 52px;
  @media (max-width: 1028px) {
    font-size: 42px;
  }
`

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <LeftDiv>
          <Heading>Hi, I'm Tyler</Heading>
          <Subheading>
            I'm a product designer living and working in Toronto 🍁
          </Subheading>
          <HeroButton to="/work-projects/">See Work Projects</HeroButton>
        </LeftDiv>
        <RightDiv>
          <img src={hero} alt="hero image" />
        </RightDiv>
      </HeroContainer>
    )
  }
}

export default Hero
