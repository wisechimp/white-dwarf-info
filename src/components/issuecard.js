import React from "react"
import Img from "gatsby-image"

import styles from "./issuecard.module.css"

export default props => (
  <div className={styles.issueCard}>
    <Img fluid={props.issueCoverSrc} alt={props.issueCoverAltText} />
    <div className={styles.issueCardText}>
      <a href={props.issueLink}>{props.issueNumber}</a>
      <p>{props.issueDate}</p>
    </div>
  </div>
)
