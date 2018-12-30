import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Design Portfolio Tyler Benning"
          keywords={[
            `ux design`,
            `portfolio`,
            `product design`,
            `gatsby`,
            `javascript`,
            `react`,
          ]}
        />
        {/* <Bio /> */}

        <h1>About Me</h1>
        <p>Product design is what I do at work everyday. </p>
        <p>
          Recently, I’ve become interested in Javascript and React, so I built
          this site using Gatsby, a static site generator for React.{' '}
        </p>
        <p>
          I think stories are an important part of design, and are what help get
          people on the same wavelength. This is a place to share some of my own
          stories.
        </p>

        {/* this is the guts of the blog post items here, this should only show up on the projects page, but we should pass this data into sidebar */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
