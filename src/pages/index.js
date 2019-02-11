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
        {/* <Bio /> */}
        <h1>About Me</h1>
        <p>
          Product design is what I do at work everyday. Sometimes that means
          fixing lots of small things inside a big app. Other times it means
          starting big ambitious projects from scratch.
        </p>
        <p>
          I wanted to start my own project from scratch to practice doing Front
          End development. Everyone's talking about how Javascript's eating the
          world, so I built this site using Gatsby, a static site builder that
          uses React and GraphQL. You can read more about this site here.
        </p>
        <p>
          For me, stories are the heart of design, and are what help get people
          on the same page. I built this site so I'd have a place to write about
          and share some of my own stories.
        </p>
        <h2>My Kid Years</h2>
        <p>
          I grew up in the boonies in a farmhouse and had too much time to kill.
          When I was 7, my brother taught me how to use our family computer. I
          quickly discovered how magical computers can be.
        </p>
        <p>
          I started playing games like Doom, Command & Conquer, Warcraft, and
          SimCity daily. I learned to download music and burn mixed CDs to
          impress friends at school. My friends’ parents started asking me to
          fix their computers, and I even made a bit of money doing it. I
          learned to use audio interfaces to record music, DV cameras to make
          videos, and how to play around with graphics in Photoshop. I wasn’t a
          child prodigy programmer, but I was a bit of computer whiz that could
          learn new tools quick.{' '}
        </p>

        <p>
          One day, my brother taught me about HTML. He showed me that if you
          write in a notepad file and save it with <code>.html</code> at the
          end, that the computer recognizes it as a web page. A couple of inline
          styles and anchor tags later, and my Dragon Ball Z drawings and MS
          paint renderings soon materialized into a homemade DBZ fan page.{' '}
        </p>

        <p>
          A few things have happened from now since then (namely Myspace, bad
          haircuts, puberty, university, a career) but I still get lost inside
          my computer tinkering around and learning new ways to conjure things
          onto the screen.{' '}
        </p>

        {/* this is the guts of the blog post items here, this should only show up on the projects page, but we should pass this data into sidebar */}
        {/* {posts.map(({ node }) => {
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
        })} */}
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
