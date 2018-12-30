import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

const SideBar = styled.div`
  position: fixed;
  top: 0;
  background: #fff;
  height: calc (100vh);
  width: 296px;
  z-index: 10;
  padding-top: 60px;
  border: 2px solid ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 10px 10px 10px 40px;
    margin: 0;
  }
  img {
    padding-left: 40px;
  }
`

const SubNav = styled.ul`
  li {
    padding-left: 10px;
  }
`

class SidebarNav extends Component {
  render() {
    return (
      <SideBar>
        {/* if user scrolls down past the top container, OR we're on a page that isn't "home" animate in logo here*/}

        {/* get some data, or get some props that are passed in for data on work projects*/}
        <Link to={`/`}>
          <img
            src="https://source.unsplash.com/random/164x60"
            alt="Tyler Benning logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/work-projects/">Work Projects</Link>

            {/* get some data, or get some props that are passed in for data on work and spit it out into list items here*/}
            {/* If the location of the page is work-projects, then show the bar below and expand it open with css animation */}
            {/* {if (this.props.location === "/work-projects/"){

              }
            } */}
            <SubNav>
              <li>
                Project Name <span>Company</span>
              </li>
              <li>
                Project Name <span>Company</span>
              </li>
            </SubNav>
          </li>
          <li>
            <Link to="/personal-projects/">Personal Projects</Link>
          </li>
          <li>Resume</li>
        </ul>
      </SideBar>
    )
  }
}

export default SidebarNav
