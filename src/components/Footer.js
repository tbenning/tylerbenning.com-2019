import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, deviceSize } from '../utils/globalStyles'
import logo from '../assets/logo.svg'
import { Link } from 'gatsby'

const Container = styled.footer`
  background: ${colors.ink10};
  padding: 40px;
  max-width: 100%;
  margin: 0 -40px;
  margin-top: 80px;
  font-size: 14px;
  @media only screen and (max-width: ${deviceSize.medium}) {
    padding-bottom: 92px;
  }

  @media (max-width: ${deviceSize.small}) {
    margin-left: -16px;
    margin-right: -16px;
  }
`

const MainContent = styled.div`
  max-width: 728px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: ${deviceSize.medium}) {
  }

  @media (max-width: ${deviceSize.small}) {
    flex-direction: column;
    align-items: center;
  }
`

const FooterList = styled.div`
  padding: 0 8px 8px 8px;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 4px;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 8px;
  }
  a {
    text-decoration: none;
    color: ${colors.ink70};
  }
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${deviceSize.small}) {
    margin-top: 28px;
    text-align: center;
  }
`

const Footer = props => (
  <Container>
    <MainContent>
      <img src={logo} alt="logo" />
      <FooterList>
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="mailto:tbenning27@gmail.com">tbenning27@gmail.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tylerbenning/"
              rel="noopener"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/tbenning"
              rel="noopener"
              target="_blank"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tbenning"
              rel="noopener"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </FooterList>

      <FooterList className="hide-mobile">
        <h4>Site</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work-projects/">Work Projects</Link>
          </li>
          <li>
            <Link to="/personal-projects/">Personal Projects</Link>
          </li>
          <li>
            <a href="http://bit.ly/2FfKMmL" target="_blank" rel="noopener">
              Resume
            </a>
          </li>
        </ul>
      </FooterList>
    </MainContent>
  </Container>
)
export default Footer
