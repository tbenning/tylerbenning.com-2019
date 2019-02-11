import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import { Link } from 'gatsby'

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  background: #fff;
  height: calc(100vh);
  width: 296px;
  z-index: 10;
  padding-top: 20px;
  border-right: 2px solid ${colors.ink20};
  overflow: scroll;

  ul:first-child {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    margin: 40px 40px 20px 40px;
  }
`
export const SidebarItem = styled.li`
  padding: 8px 8px 8px 40px;
  margin: 0;
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0);

  ${'' /* a:first-child {
    display: flex;
    align-items: center;
  } */}

  a:hover {
    color: ${colors.ink90};
    text-decoration: underline;
  }

  a {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 12px;
  }

  svg path {
    fill: ${colors.ink50};
  }

  &.active {
    ${'' /* border-top: 1px solid ${colors.ink20};
    border-bottom: 1px solid ${colors.ink20};
    border-left: 6px solid ${colors.brand};
    padding-left: 35px; */}

    ${'' /* background: ${colors.ink10}; */}
    font-weight: 600;
  }
  &.active a {
    color: ${colors.ink90};
  }
  &.active svg path {
    fill: ${colors.ink90};
  }
  a {
    color: ${colors.ink70};
    text-decoration: none;
  }
`

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${colors.ink70};
  width: 100%;
`
