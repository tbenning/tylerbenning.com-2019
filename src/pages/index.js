import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Tabs from '../components/Tabs'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Design Portfolio - Tyler Benning"
          keywords={[
            `ux design`,
            `ui design`,
            `portfolio`,
            `product design`,
            `gatsby`,
            `javascript`,
            `react`,
          ]}
        />
        <Tabs>
          <div label="What I Do at Work"> 
          <p>Product design is what I do at work everyday. </p>
          <p>Sometimes that means
          fixing lots of small problems inside a big software app. Other times
          it means starting big ambitious projects from scratch. On some
          occasions, it means talking through problems and designing my way out
          of designing anything at all.
        </p>
        <p>
          When I work, I value sketching and writing over talking in circles. I
          think great ideas come from different team members when they have lots
          of relevant inputs from users and customers to give them context. I care about my teammates' work, even if I don't
          understand all of its nuances. I think roles are a helpful way to
          designate accountability within teams, but I like to stretch into adjacent roles of product and engineering. </p>
          <p>Making a successful product is a team sport.</p>
          </div>
          <div label="What I'm Learning"> 
        <p>
          Professionally, I'm drawn to the intersection of design and front-end
          development. I'd heard that learning React can help you become better at Javascript, so I started picking it up. 
          A good starting point for me, was to build this site using{' '}
          <a href="https://www.gatsbyjs.org/" rel="noopener" target="_blank"> Gatsby</a> which uses React. </p>
          
          <p>If you're interested, you can read more about how I <code>export default</code>'d my way to launching this site{' '}
          <Link to="/personal-projects/tylerbenning-website/">here.</Link>
        </p>
        <p>
          Outside work, I keep some hobbies. I started brewing kombucha,{' '}
          <a
            href="https://www.youtube.com/watch?v=cKx8xE8jJZs"
            target="_blank"
            rel="noopener"
          >
            swinging kettlebells,
          </a>{' '}
          and writing music. I've dabbled in salsa dancing, sensory deprivation
          tanks, singing lessons, and drawing terribly. Ask me again in a month,
          and this list will likely be entirely different.
        </p>
        
          </div>
          <div label="What This Site's About"> 
        <p>
          Stories are at the heart of design, and are what connect people to
          common ideas, goals, and motivations. Designers help craft these
          stories and enable people to have new interactions and experiences. I
          built this site so I'd have a place to write about and share some of
          my own stories and experiences as a Product Designer. Through this
          site, maybe we can share an experience.
        </p>
     
          </div>
        </Tabs>
        
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
            dateRange
            title
          }
        }
      }
    }
  }
`
