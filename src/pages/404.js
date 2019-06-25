import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Whoops, this page doesn't exist</h1>
        <p>Looks like you've stumbled onto non-existant page.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
