import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import "../components/style/global.css"

const Post = styled.div`
`
const PostImage = styled.div`
  
`
const PostText = styled.div`
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlog.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="all_posts">
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug} className="one_post">
               
              <PostText>
                  <h3>
                      <Link to={node.slug}>
                        {title}
                      </Link>
                    </h3>
                    <p>{node.subtitle}</p>
              </PostText>   
            </Post>
          )
        })}
        </div>
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
      allContentfulBlog (sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            title
            subtitle
            slug
            image{
              fluid{
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    
  }
`
