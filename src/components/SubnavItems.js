import React, { Components } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

//Static query to get the data we need
//Take that data for posts and spit it into the nav
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___company], order: DESC }
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
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
              <span>{node.frontmatter.company}</span>
            </Link>
          </li>
        ))}
      </ul>
    )}
  />
  // End of Static Query
)
