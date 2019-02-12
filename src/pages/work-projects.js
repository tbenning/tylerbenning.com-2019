import React from 'react'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import placeholder from '../assets/placeholder.png'
import styled from 'styled-components'

const ItemContainer = styled.div``

const Heading = styled.h1`
  margin-bottom: 0;
`

const Subheading = styled.p`
  margin-top: 8px;
  line-height: 1.65;
  margin-bottom: 36px;
`

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
        <Heading>Work Projects</Heading>
        <Subheading>
          Case studies from companies I’ve worked with over the past few years.
        </Subheading>
        <ItemContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <ProjectItem
                  title={title}
                  imgSrc={placeholder}
                  subtitle={node.frontmatter.tagline}
                  timeline={node.frontmatter.dateRange}
                  readTime={node.timeToRead}
                  linkTo={node.fields.slug}
                />
              </div>
            )
          })}
        </ItemContainer>
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
            dateRange
            title
            tagline
          }
        }
      }
    }
  }
`
