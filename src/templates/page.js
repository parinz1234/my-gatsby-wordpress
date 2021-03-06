import React, { Component } from 'react'
import Link from "gatsby-link";

class PageTemplate extends Component {
  render () {
    const post = this.props.data.wordpressPage
    
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{__html: post.title}}></h1>
        <div dangerouslySetInnerHTML={{__html: post.date}}></div>
        <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        <Link to="/">Home</Link>
      </div>
    )
  }
}


export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`