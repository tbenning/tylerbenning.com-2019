import React from 'react'
import { Link } from 'gatsby'
import '../utils/theme.css'
import Hero from './Hero'
import styled from 'styled-components'
import SidebarNav from './SidebarNav'

const Topstrip = styled.div`
  height: 20px;
  width: 100%;
  background-color: #07243e;
  position: fixed;
  top: 0;
  z-index: 100;
`

const Container = styled.div`
  padding: 60px 0 40px 0;
`

const RightContainer = styled.div`
  padding-left: 336px;
  padding-right: 40px;
  max-width: 100%;
`

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 768px;
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
    // else {
    //   header = (
    //     <h3>
    //       <Link to={`/`}>Logo</Link>
    //     </h3>
    //   )
    // }

    return (
      <div>
        <Topstrip />
        <Container>
          <SidebarNav location={location.pathname} />
          <RightContainer>
            <MainContent>
              {header}
              {children}
            </MainContent>
          </RightContainer>
          <footer>
            Built using <a href="https://www.gatsbyjs.org">Gatsby</a>, with
            special thanks to Meng To, Wes Bos, and HackerYou{' '}
            <a href="#">Read About this Site</a>
          </footer>
        </Container>
      </div>
    )
  }
}

export default Layout
