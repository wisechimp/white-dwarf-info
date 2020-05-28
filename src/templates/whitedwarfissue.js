import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import parse from "html-react-parser"

import Layout from "../components/layout"
import HeaderLinks from "../components/headerlinks"
import ExternalLink from "../components/externallink"
import issueStyles from "./whitedwarfissue.module.css"

const mdxComponents = { Link, ExternalLink }

const WhiteDwarfIssueTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const parsedSummary = parse(frontmatter.summary)
  return (
    <Layout pageTitle={"White Dwarf " + frontmatter.issue}>
      <HeaderLinks issueNumber={frontmatter.issue} />
      <h1 className={issueStyles.issueTitle}>
        {"White Dwarf " + frontmatter.issue}
      </h1>
      <p className={issueStyles.issueSummary}>{parsedSummary}</p>
      <div className={issueStyles.issueContainer}>
        <Img
          className={issueStyles.issueCover}
          fluid={frontmatter.coverSrc.childImageSharp.fluid}
          alt={"The cover of White Dwarf magazine issue " + frontmatter.issue}
        />
        <MDXProvider
          className={issueStyles.issueContent}
          components={mdxComponents}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export default WhiteDwarfIssueTemplate

export const issueQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        issue
        summary
        date
        coverSrc {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
