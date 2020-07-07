import React from "react"

import buttonStyles from "./buttonlink.module.css"

export default props => (
  <a
    className={buttonStyles.buttonLink}
    href={`/issues/white-dwarf-magazine-${props.targetIssueNumber}`}
  >
    {props.targetIssueNumber}
  </a>
)
