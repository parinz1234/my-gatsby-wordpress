import React, { Component } from "react"
import Link from "gatsby-link";
class Index extends Component {
  render () {
    const page = this.props.data.allWordpressPage
    const post = this.props.data.allWordpressPost
    return (
      <div>
        <div>Hello world!</div>
        <div>
          <p>Page</p>
          <ul>
            {
              page.edges.map(value => 
                <li key={value.node.slug}>
                  <Link to={`/${value.node.slug}`}>
                    { value.node.title }
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
        <div>
          <p>Post</p>
          <ul>
            {
              post.edges.map(value => 
                <li key={value.node.slug}>
                  <Link to={`/post/${value.node.slug}`}>
                    { value.node.title }
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Index


export const pageQuery = graphql`
query pageLinkQuery {
  allWordpressPage {
    edges {
      node {
        slug
        title
      }
    }
  }
  allWordpressPost {
    edges {
      node {
        slug
        title
      }
    }
  }
}
`