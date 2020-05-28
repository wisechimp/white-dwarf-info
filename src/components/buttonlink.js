import React from "react"
import { Link } from "gatsby"

import buttonStyles from "./buttonlink.module.css"

export default props => (
  <Link
    className={buttonStyles.buttonLink}
    to={`/issues/white-dwarf-magazine-${props.targetIssueNumber}`}
  >
    {props.targetIssueNumber}
  </Link>
)
