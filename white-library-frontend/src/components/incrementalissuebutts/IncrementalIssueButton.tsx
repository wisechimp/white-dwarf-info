import { Link } from "gatsby"
import React, { ReactNode } from "react"

import constants from "../../constants/strings"

import * as incrementalButtonStyles from "./incrementalissuebutton.module.css"

interface IncrementalIssueButtonProps {
  incrementalIssue: number
  children: ReactNode
}

const IncrementalIssueButton = ({
  incrementalIssue,
  children,
}: IncrementalIssueButtonProps) => {
  const incrementalIssuePage =
    constants.slugBaseString + incrementalIssue.toString()
  return (
    <Link
      className={incrementalButtonStyles.linkButton}
      to={incrementalIssuePage}
    >
      {children}
    </Link>
  )
}

export default IncrementalIssueButton
