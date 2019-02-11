import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import ProjectItem from '../components/ProjectItem'
import placeholder from '../assets/placeholder.png'

class workProjects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        props={this.props}
      >
        <h1>Work Projects</h1>
        <p>
          Case studies from companies I’ve worked with over the past few years
        </p>
        {/* this is the guts of the blog post items here, this should only show up on the projects page, but we should pass this data into sidebar */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <ProjectItem
                title={title}
                imgSrc={placeholder}
                subtitle={node.frontmatter.tagline}
                timeline={node.frontmatter.date}
                readTime={node.timeToRead}
                linkTo={node.fields.slug}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default workProjects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___company], order: DESC }
      filter: { fields: { slug: { regex: "/work-projects/" } } }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tagline
          }
        }
      }
    }
  }
`
