import React from 'react'
import { Link } from 'gatsby'
import '../utils/theme.css'
import Hero from './Hero'
import styled from 'styled-components'
import SidebarNav from './SidebarNav'
import { colors } from '../utils/globalStyles'

const Topstrip = styled.div`
  height: 20px;
  width: 100%;
  background-color: #07243e;
  position: fixed;
  top: 0;
  z-index: 100;
`

const Container = styled.div`
  padding: 60px 0 0 0;
`

const RightContainer = styled.div`
  padding-left: 336px;
  padding-right: 40px;
  max-width: 100%;
`

const MainContent = styled.div`
  max-width: 728px;
`

const Footer = styled.footer`
  background: ${colors.purple10};
  padding: 80px 40px 80px 40px;
  max-width: 100%;
  margin-left: 298px;
  margin-top: 80px;
  font-size: 14px;
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
          <RightContainer>{header}</RightContainer>
          <RightContainer>
            <MainContent>{children}</MainContent>
          </RightContainer>

          <Footer>
            Built using{' '}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener">
              Gatsby
            </a>
            , with special thanks to Meng To, Wes Bos, and HackerYou{' '}
            <a href="#">Read About this Site</a>
          </Footer>
        </Container>
      </div>
    )
  }
}

export default Layout
