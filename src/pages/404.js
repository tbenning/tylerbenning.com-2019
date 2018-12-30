import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Whoops, page not found</h1>
        <p>Looks like you just hit a page that doesn&#39;t exist.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
