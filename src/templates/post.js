import React, { Component } from 'react'
import Link from "gatsby-link";

class PostTemplate extends Component {
  render () {
    const post = this.props.data.wordpressPost
    
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


export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY")
      content
    }
  }
`