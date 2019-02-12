import React from 'react'
import { Link } from 'gatsby'
import '../utils/theme.css'
import Hero from './Hero'
import styled from 'styled-components'
import SidebarNav from './SidebarNav'
import { colors, deviceSize } from '../utils/globalStyles'
import MobileNav from './MobileNav'
import Footer from './Footer'

const Topstrip = styled.div`
  height: 20px;
  width: 100%;
  background-color: #07243e;
  position: fixed;
  top: 0;
  z-index: 100;

  @media only screen and (max-width: ${deviceSize.medium}) {
    position: absolute;
  }
`

const Container = styled.div`
  padding: 60px 0 0 0;
`

const RightContainer = styled.div`
  padding-left: 336px;
  padding-right: 40px;
  max-width: 100%;
  opacity: 0.25;
  animation: HeroAnimation 2.5s forwards cubic-bezier(0.165, 0.82, 0.165, 1);

  @keyframes HeroAnimation {
    0% {
      opacity: 0.25;
      transform: translateY(10px);
    }
    25% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media only screen and (max-width: ${deviceSize.medium}) {
    padding-left: 40px;
  }

  @media only screen and (max-width: ${deviceSize.small}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const MainContent = styled.div`
  max-width: 728px;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <div>
          <Hero />
        </div>
      )
    }

    return (
      <div>
        <Topstrip />
        <Container>
          <SidebarNav location={location.pathname} props={this.props} />
          <MobileNav location={location.pathname} />
          <RightContainer>{header}</RightContainer>
          <RightContainer>
            <MainContent>{children}</MainContent>
            <Footer />
          </RightContainer>
        </Container>
      </div>
    )
  }
}

export default Layout
