import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./issuecard.module.css"

export default props => (
  <div className={styles.issueCard}>
    <Img fluid={props.issueCoverSrc} alt={props.issueCoverAltText} />
    <div className={styles.issueCardText}>
      <Link to={props.issueLink}>{props.issueNumber}</Link>
      <p>{props.issueDate}</p>
    </div>
  </div>
)
