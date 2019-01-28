import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import { StaticQuery, graphql } from 'gatsby'
//import LogoSvg from './LogoSvg'
import logo from '../assets/logo.svg'
import { SideBar, NavLink, SubNav } from './SidebarNav.styles'
import SubnavItems from './SubnavItems'

class SidebarNav extends Component {
  render() {
    const passedData = this.props
    //console.log(passedData)
    const currentPage = this.props.location
    const urlSplit = currentPage.split('/')
    //console.log(urlSplit[2])
    let workitems
    if (urlSplit[1] == `work-projects`) {
      workitems = (
        <SubNav>
          {/* <li>
            <Link to={`/work-projects/top-hat-ux-quickwins/`}>
              <h3>UX Quickwins on Mobile</h3>
              <span>Top Hat</span>
            </Link>
          </li> */}
          <SubnavItems />
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
          </li>
          <li className={currentPage == `/personal-projects/` ? `active` : ``}>
            <NavLink to="/personal-projects/">Personal Projects</NavLink>
          </li>
          <li>
            <a href="http://bit.ly/2FfKMmL" target="_blank" rel="noopener">
              Resume
            </a>
          </li>
        </ul>
      </SideBar>
    )
  }
}

export default SidebarNav
