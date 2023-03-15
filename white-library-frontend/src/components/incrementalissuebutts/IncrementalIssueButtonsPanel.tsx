import React from "react"
import { FaFastBackward, FaFastForward } from "react-icons/fa"

import strings from "../../constants/strings"
import IncrementalIssueButton from "./IncrementalIssueButton"
import * as incrementalButtonPanelStyles from "./incrementalissuebuttonspanel.module.css"

interface IncrementalIssueButtonPanelProps {
  issueNumber: number
}

const IncrementalIssueButtonPanel = ({
  issueNumber,
}: IncrementalIssueButtonPanelProps) => {
  const nextIssue = issueNumber + 1
  const previousIssue = issueNumber - 1
  return (
    <div className={incrementalButtonPanelStyles.container}>
      <IncrementalIssueButton incrementalIssue={previousIssue}>
        <FaFastBackward />
        {strings.previousIssueButtonText}
      </IncrementalIssueButton>
      <IncrementalIssueButton incrementalIssue={nextIssue}>
        {strings.nextIssueButtonText}
        <FaFastForward />
      </IncrementalIssueButton>
    </div>
  )
}

export default IncrementalIssueButtonPanel
