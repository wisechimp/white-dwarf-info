import React from 'react'
import { Link } from 'gatsby'

import styles from "./issuecard.module.css"

export default (props) => (
  <div className={styles.issueCard}>
    <img src={props.issueCoverSrc} />
    <div className={styles.issueCardText}>
      <Link to={props.issueLink}>{props.issueNumber}</Link>
      <p>{props.issueDate}</p>
    </div>
  </div>
)
