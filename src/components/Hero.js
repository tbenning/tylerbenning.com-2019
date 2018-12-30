import React, { Component } from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  height: 320px;
`
const LeftDiv = styled.div`
  max-width: 480px;
`

const RightDiv = styled.div``

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <LeftDiv>
          <h1>Hi, I'm Tyler</h1>
          <p>
            I'm a product designer living in Toronto 🍁 and I usually have too
            many tabs in my browser open at once
          </p>
        </LeftDiv>
      </HeroContainer>
    )
  }
}

export default Hero
