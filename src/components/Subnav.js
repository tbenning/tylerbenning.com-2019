import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

export const NavList = styled.ul`
  list-style: none;
  margin: 16px 0 0 0;
  padding: 0;

  li {
    padding-left: 36px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  li h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: ${colors.ink80};
  }
  li span {
    font-size: 12px;
    font-weight: 500;
    color: ${colors.ink70};
  }

  li a {
    display: block;
  }
  li a:hover {
    text-decoration: none;
  }

  li a:hover h3 {
    color: ${colors.ink90};
    text-decoration: underline;
  }
  .active {
    ${'' /* border-left: 4px solid ${colors.purple40};
    padding-left: 8px; */}
  }
  .active h3 {
    color: ${colors.ink90} !important;
    font-weight: 600;
  }
`
class Subnav extends Component {
  render() {
    const location = this.props.location
    const rootUrl = this.props.rootUrl
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: [frontmatter___company], order: DESC }
              filter: { fields: { slug: { regex: "/work-projects/" } } }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    company
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <NavList>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <li
                key={index}
                className={
                  location && location == node.fields.slug ? `active` : ``
                }
              >
                <Link to={node.fields.slug}>
                  <h3>{node.frontmatter.title}</h3>
                  <span>{node.frontmatter.company}</span>
                </Link>
              </li>
            ))}
          </NavList>
        )}
      />
    )
  }
}

export default Subnav
