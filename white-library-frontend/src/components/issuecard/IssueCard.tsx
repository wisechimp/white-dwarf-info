import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./issuecard.module.css"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

interface IssueCardProps {
  issueNumber: number
  imageData: IGatsbyImageData
}

export default ({ issueNumber, imageData }: IssueCardProps) => (
  <div className={styles.issueCard}>
    <GatsbyImage image={imageData} alt={`The cover of issue ${issueNumber}`} />
    <div className={styles.issueCardText}>
      <Link to={`/white-dwarf-magazine-issue-${issueNumber}`}>
        {issueNumber}
      </Link>
    </div>
  </div>
)
