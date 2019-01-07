import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

//import LogoSvg from './LogoSvg'
import logo from '../assets/logo.svg'

const SideBar = styled.div`
  position: fixed;
  top: 0;
  background: #fff;
  height: calc(100vh);
  width: 296px;
  z-index: 10;
  padding-top: 20px;
  border-right: 2px solid ${colors.ink20};
  overflow: scroll;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 8px 8px 8px 40px;
    margin: 0;
    font-size: 16px;
    width: 100%;
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  li:hover {
    background: ${colors.ink10};
    cursor: pointer;
  }

  img {
    margin: 40px 40px 20px 40px;
  }

  .active {
    border-top: 1px solid ${colors.ink20};
    border-bottom: 1px solid ${colors.ink20};
    border-left: 6px solid ${colors.brand};
    padding-left: 35px;
    background: ${colors.ink10};
    font-weight: 600;
  }
  .active a {
    color: ${colors.ink90};
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.ink70};
  width: 100%;
`

const SubNav = styled.ul`
  li {
    padding-left: 10px;
    font-size: 14px;
  }
`

class SidebarNav extends Component {
  render() {
    console.log(this.props.location)
    const currentPage = this.props.location
    let workitems

    if (currentPage == `/work-projects/`) {
      workitems = (
        <SubNav>
          <li>
            Project Name <span>Company</span>
          </li>
          <li>
            Project Name <span>Company</span>
          </li>
        </SubNav>
      )
    } else {
      workitems = <div />
    }

    return (
      <SideBar>
        {/* if user scrolls down past the top container, OR we're on a page that isn't "home" animate in logo here*/}

        {/* get some data, or get some props that are passed in for data on work projects*/}
        <Link to={`/`}>
          <img src={logo} alt="tyler benning logo" />
          {/* <LogoSvg style={{ margin: '40px' }} /> */}
        </Link>
        <ul>
          <li className={currentPage == `/` ? `active` : ``}>
            <NavLink to="/">About</NavLink>
          </li>
          <li className={currentPage == `/work-projects/` ? `active` : ``}>
            <NavLink to="/work-projects/">Work Projects</NavLink>
            {workitems}
            {/* get some data, or get some props that are passed in for data on work and spit it out into list items here*/}
            {/* If the location of the page is work-projects, then show the bar below and expand it open with css animation */}
            {/* {if (this.props.location === "/work-projects/"){

              }
            } */}
          </li>
          <li className={currentPage == `/personal-projects/` ? `active` : ``}>
            <NavLink to="/personal-projects/">Personal Projects</NavLink>
          </li>
          <li>Resume</li>
        </ul>
      </SideBar>
    )
  }
}

export default SidebarNav
