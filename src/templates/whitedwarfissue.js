import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import parse from "html-react-parser"

import Layout from "../components/layout"
import HeaderLinks from "../components/headerlinks"
import ExternalLink from "../components/externallink"
import Footer from "../components/footer"
import issueStyles from "./whitedwarfissue.module.css"

const mdxComponents = { Link, ExternalLink }

const WhiteDwarfIssueTemplate = ({ data }) => {
  //console.log(data)

  const allIssueNumbers = data.allIssueNumbers.edges.map(({ node }) =>
    parseInt(node.frontmatter.issue)
  )
  //console.log(allIssueNumbers)

  const { frontmatter, body } = data.currentIssue
  const parsedSummary = parse(frontmatter.summary)
  return (
    <Layout pageTitle={"White Dwarf " + frontmatter.issue}>
      <HeaderLinks
        allIssueNumbers={allIssueNumbers}
        issueNumber={parseInt(frontmatter.issue)}
      />
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
      <Footer issueNumber={frontmatter.issue} />
    </Layout>
  )
}

export default WhiteDwarfIssueTemplate

export const issueQuery = graphql`
  query($slug: String!) {
    currentIssue: mdx(frontmatter: { slug: { eq: $slug } }) {
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
    allIssueNumbers: allMdx {
      edges {
        node {
          frontmatter {
            issue
          }
        }
      }
    }
  }
`
