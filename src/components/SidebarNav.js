import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import { StaticQuery, graphql } from 'gatsby'
//import LogoSvg from './LogoSvg'
import logo from '../assets/logo.svg'
import { SideBar, NavLink, SidebarItem } from './SidebarNav.styles'
import Subnav from './Subnav'

class SidebarNav extends Component {
  render() {
    const currentPage = this.props.location
    console.log(currentPage)
    const urlSplit = currentPage.split('/')
    //console.log(urlSplit[2])
    let workitems
    if (urlSplit[1] == `work-projects`) {
      workitems = <Subnav location={currentPage} />
    } else {
      workitems = <div />
    }

    return (
      <SideBar className="hide-mobile">
        {/* if user scrolls down past the top container, OR we're on a page that isn't "home" animate in logo here*/}

        {/* get some data, or get some props that are passed in for data on work projects*/}
        <Link to={`/`}>
          <img src={logo} alt="tyler benning logo" />
          {/* <LogoSvg style={{ margin: '40px' }} /> */}
        </Link>
        <ul>
          <SidebarItem className={currentPage == `/` ? `active` : ``}>
            <NavLink to="/">About</NavLink>
          </SidebarItem>
          <SidebarItem
            className={currentPage == `/work-projects/` ? `active` : ``}
          >
            <NavLink to="/work-projects/">Work Projects</NavLink>
            {workitems}
          </SidebarItem>
          <SidebarItem
            className={currentPage == `/personal-projects/` ? `active` : ``}
          >
            <NavLink to="/personal-projects/">Personal Projects</NavLink>
          </SidebarItem>
          <SidebarItem>
            <a href="http://bit.ly/2FfKMmL" target="_blank" rel="noopener">
              Resume
            </a>
          </SidebarItem>
        </ul>
      </SideBar>
    )
  }
}

export default SidebarNav
