import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, deviceSize } from '../utils/globalStyles'
import hero from '../assets/hero-1.jpg'
import heroBottom from '../assets/hero-1@2x.jpg'
import heroTop from '../assets/hero-2@2x.jpg'
import { HeroButton } from './HeroButton.js'

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0 20px 0;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
  @media (max-width: ${deviceSize.smallMedium}) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
const LeftDiv = styled.div`
  width: 45%;
  z-index: 10;
  @media (max-width: ${deviceSize.smallMedium}) {
    order: 1;
    width: 100%;
  }
`

const RightDiv = styled.div`
  width: 55%;
  position: relative;
  animation: float 3s ease-in-out infinite;
  img {
    width: 120%;
    max-width: 600px;
    margin-left: -40px;
    margin-top: -50px;
  }
  img.top {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: ${deviceSize.smallMedium}) {
    width: 100%;
    img {
      width: 100%;
      margin-left: 0;
    }
  }
  .top {
    animation: fade 1s ease-in 2 alternate;
    animation-delay: 1s;
  }

  &:hover > .top {
    animation: fade 1s ease-in infinite alternate;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    21% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    41% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    61% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    81% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`

const Subheading = styled.p`
  font-family: 'IBM Plex Sans', sans serif;
  line-height: 1.65;
  font-size: 24px;
  color: ${colors.ink80};
  margin: 12px 0 20px 0;
  @media (max-width: 1028px) {
    font-size: 18px;
  }
`

const Heading = styled.h1`
  font-size: 52px;
  margin-bottom: 0;
  @media (max-width: 1028px) {
    font-size: 42px;
  }
`

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <LeftDiv>
          <Heading>Hi, I’m Tyler</Heading>
          <Subheading>
            I’m a shameless{' '}
            <a
              href="https://www.urbandictionary.com/define.php?term=Tab-Hoarder"
              rel="noopener"
              target="_blank"
            >
              tab-hoarder
            </a>{' '}
            &amp; product designer living in Toronto&nbsp;🍁
          </Subheading>
          <HeroButton to="/work-projects/">See Work Projects</HeroButton>
        </LeftDiv>
        <RightDiv>
          {/* <HeroImg> */}
          <img src={heroBottom} alt="hero image1" className="bottom" />
          <img src={heroTop} alt="hero image2" className="top" />
          {/* </HeroImg> */}
        </RightDiv>
      </HeroContainer>
    )
  }
}

export default Hero
