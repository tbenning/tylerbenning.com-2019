import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

const WriteupDiv = styled.div`
  li {
    font-family: 'PT Serif', georgia, serif;
    font-size: 18px;
    color: ${colors.ink80};
  }
`

const NextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.ink90};
  font-size: 20px;
  transition: 0.25s;
  display: block;
  border: 2px solid ${colors.ink20};
  padding: 16px;
  border-radius: 4px;
  span {
    font-size: 14px;
    line-height: 1.2;
    display: block;
    font-weight: 600;
    color: ${colors.ink70};
  }
  &:hover {
    color: ${colors.purple90};
    background: ${colors.ink10};
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 0 10px 18px -5px rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.dateRange}</p>
        <WriteupDiv dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: `40px`,
            marginBottom: `-32px`,
          }}
        >
          <li
            style={{
              width: `48%`,
            }}
          >
            {next && (
              <NextLink to={next.fields.slug} rel="next">
                <span>← Previous</span>
                {next.frontmatter.title}
              </NextLink>
            )}
          </li>
          <li
            style={{
              textAlign: `right`,
              width: `48%`,
            }}
          >
            {previous && (
              <NextLink to={previous.fields.slug} rel="prev">
                <span>Next →</span> {previous.frontmatter.title}
              </NextLink>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        dateRange
      }
    }
  }
`
