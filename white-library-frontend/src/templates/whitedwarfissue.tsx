import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

import Layout from "../components/layout/Layout"
import WdIssueType from "../types/wdIssueType"
import * as styles from "./whitedwarfissue.module.css"

const WhiteDwarfIssueTemplate = ({ data }: WdIssueType) => {
  const { date, issueNumber, summary, coverImage } = data.sanityIssue
  const issueCoverData = getImage(coverImage.asset.gatsbyImageData)
  return (
    <Layout pageTitle={"White Dwarf " + issueNumber}>
      <p>{date}</p>
      <p>{summary}</p>
      <GatsbyImage
        image={issueCoverData!}
        alt='The cover of this white dwarf magazine'
      />
    </Layout>
  )
}

export default WhiteDwarfIssueTemplate

export const query = graphql`
  query IssueById($id: String) {
    sanityIssue(id: { eq: $id }) {
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
  }
`
