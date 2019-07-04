import React from 'react'

import Cover from '../data/images/tn_white-dwarf-magazine-cover-101.jpg'
import IssueCard from '../components/issuecard'
import Layout from '../components/layout'

export default () => (
  <Layout pageTitle="Issues">
    <h1>Issues</h1>
    <IssueCard
      issueCoverSrc = {Cover}
      issueLink = "/white-dwarf-magazine-101"
      issueNumber = "White Dwarf 101"
      issueDate = "May 1988"
    />
  </Layout>
)
