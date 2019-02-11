import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import hero from '../assets/hero-1.jpg'
import hero2x from '../assets/hero-1@2x.jpg'
import heroleft2x from '../assets/hero-2@2x.jpg'
import { HeroButton } from './HeroButton.js'

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 60px 0 20px 0;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
const LeftDiv = styled.div`
  width: 45%;
  ${'' /* max-width: 400px; */}
  z-index: 10;
  @media (max-width: 500px) {
    order: 1;
    width: 100%;
  }
`

const RightDiv = styled.div`
  width: 55%;

  img {
    width: 120%;
    max-width: 600px;
    margin-left: -40px;
    margin-top: -50px;
  }
  @media (max-width: 500px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`

const Subheading = styled.p`
  font-family: 'IBM Plex Sans', sans serif;
  line-height: 1.65;
  font-size: 24px;
  color: ${colors.ink80};
  margin-bottom: 20px;
  @media (max-width: 1028px) {
    font-size: 18px;
  }
`

const Heading = styled.h1`
  font-size: 52px;
  margin-bottom: 8px;
  @media (max-width: 1028px) {
    font-size: 42px;
  }
`

class Hero extends Component {
  render() {
    let heroImg = heroleft2x
    const animateHero = () => {
      console.log('stuff')
      //heroImg = hero2x
    }
    return (
      <HeroContainer>
        <LeftDiv>
          <Heading>Hi, I'm Tyler</Heading>
          <Subheading>
            I'm a recovering tab hoarder & product designer living in
            Toronto&nbsp;🍁
          </Subheading>
          <HeroButton to="/work-projects/">See Work Projects</HeroButton>
        </LeftDiv>

        <RightDiv>
          {/* Add a mouseover event to switch and animate the image here */}
          <img src={heroImg} alt="hero image" onClick={() => animateHero()} />
        </RightDiv>
      </HeroContainer>
    )
  }
}

export default Hero
