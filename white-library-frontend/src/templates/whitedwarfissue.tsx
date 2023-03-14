import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

import WdArticleType from "../types/wdArticleType"
import WdIssueType from "../types/wdIssueType"
import Layout from "../components/layout/Layout"
import ArticlesList from "../components/articleslist/ArticlesList"
import EbayFooter from "../components/ebayfooter/EbayFooter"

import * as styles from "./whitedwarfissue.module.css"

interface WdIssueDataInterface {
  data: {
    articles: {
      edges: {
        node: WdArticleType
      }[]
    }
    issue: WdIssueType
  }
}

const WhiteDwarfIssueTemplate = ({ data }: WdIssueDataInterface) => {
  console.log(data)
  const { date, issueNumber, summary, coverImage } = data.issue
  const issueCoverData = getImage(coverImage.asset.gatsbyImageData)
  const { edges } = data.articles
  return (
    <Layout pageTitle={"White Dwarf " + issueNumber}>
      <p className={styles.issueSummary}>
        {date} - {summary}
      </p>
      <GatsbyImage
        image={issueCoverData!}
        alt='The cover of this white dwarf magazine'
        className={styles.issueCover}
      />
      <ArticlesList edges={edges} />
      <EbayFooter issueNumber={issueNumber} />
    </Layout>
  )
}

export const Head = ({ data }: WdIssueDataInterface) => {
  const isBrowser = typeof window !== "undefined"
  return (
    <>
      <title>{`White Dwarf Magazine Issue ${data.issue.issueNumber}`}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {isBrowser && (
        <script
          async
          src='https://epnt.ebay.com/static/epn-smart-tools.js'
        ></script>
      )}
    </>
  )
}

export default WhiteDwarfIssueTemplate

export const query = graphql`
  query IssueAndArticles($id: String!, $issueNumber: Int!) {
    issue: sanityIssue(id: { eq: $id }) {
      id
      date
      issueNumber
      summary
      coverImage {
        asset {
          gatsbyImageData
        }
      }
    }
    articles: allWhiteDwarfArticles(
      filter: { issueNumber: { eq: $issueNumber } }
      sort: { pageNumber: ASC }
    ) {
      edges {
        node {
          articleTitle
          articleDescription
          id
          issueNumber
          pageNumber
          republished
          republishedPublication
          tag
        }
      }
    }
  }
`
