import React from "react"
import { Link } from "gatsby"

export default props => (
  <Link to={`/issues/white-dwarf-magazine-${props.targetIssueNumber}`}>
    {props.targetIssueNumber}
  </Link>
)
