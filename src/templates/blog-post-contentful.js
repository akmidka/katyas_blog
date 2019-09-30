import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlog
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
        <article>
        <Img fluid={post.image.fluid} />

          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.title}
            </h1>            
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.text.childContentfulRichText.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlog (slug: {eq: $slug}) {
      title
      subtitle
      image{
        fluid{
          ...GatsbyContentfulFluid
        }
      }
      text {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
