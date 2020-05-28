import React from "react"

import ButtonLink from "./buttonlink"
import headerLinksStyles from "./headerlinks.module.css"

export default props => {
  const currentIssueNumber = parseInt(props.issueNumber)

  return (
    <div className={headerLinksStyles.headerContainer}>
      <ButtonLink targetIssueNumber={currentIssueNumber - 1} />
      <ButtonLink targetIssueNumber={currentIssueNumber + 1} />
    </div>
  )
}
