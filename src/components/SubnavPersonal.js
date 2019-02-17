import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import { NavList } from './Subnav'

class SubnavPersonal extends Component {
  render() {
    const location = this.props.location
    const rootUrl = this.props.rootUrl
    const projectQuery = graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___company], order: DESC }
          filter: { fields: { slug: { regex: "/personal-projects/" } } }
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
    `

    return (
      <StaticQuery
        query={projectQuery}
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

export default SubnavPersonal
