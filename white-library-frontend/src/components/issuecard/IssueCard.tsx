import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./issuecard.module.css"

export default ({ issueNumber, imageData }) => (
  <div className={styles.issueCard}>
    <GatsbyImage image={imageData} alt={`The cover of issue ${issueNumber}`} />
    <div className={styles.issueCardText}>
      <Link to={`/white-dwarf-magazine-issue-${issueNumber}`}>
        {issueNumber}
      </Link>
    </div>
  </div>
)
