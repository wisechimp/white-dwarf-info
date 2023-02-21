import React from "react"
import { PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import IssueCard from "./IssueCard"
import * as issueCardListStyles from "./issuecardlist.module.css"

const IssueCardList = ({
  edges,
}: Queries.IssuesPageQuery["allSanityIssue"]) => {
  return (
    <div className={issueCardListStyles.issueCardListContainer}>
      {edges.map(({ node }) => {
        const issueCoverImageData = getImage(
          node.coverImage!.asset!.gatsbyImageData
        )
        return (
          <IssueCard
            key={node.id}
            imageData={issueCoverImageData!}
            issueNumber={node.issueNumber!}
          />
        )
      })}
    </div>
  )
}

export default IssueCardList
