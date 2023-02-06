import React from "react"

import ButtonLink from "./buttonlink"
import headerLinksStyles from "./headerlinks.module.css"

export default props => {
  const existingIssuesArray = props.allIssueNumbers

  const previousIssue = props.issueNumber - 1
  const nextIssue = props.issueNumber + 1

  const issueExists = issueNumberQueried => {
    return existingIssuesArray.includes(issueNumberQueried)
  }

  const previousIssueExists = issueExists(previousIssue)
  const nextIssueExists = issueExists(nextIssue)

  return (
    <div className={headerLinksStyles.headerContainer}>
      <div>
        {previousIssueExists && (
          <ButtonLink targetIssueNumber={previousIssue} />
        )}
      </div>
      <div>
        {nextIssueExists && <ButtonLink targetIssueNumber={nextIssue} />}
      </div>
    </div>
  )
}
