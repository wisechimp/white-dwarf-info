import React, { Component } from 'react'
import get from "lodash/get"
import { graphql } from "gatsby"

import IssueCard from '../components/issuecard'
import Layout from '../components/layout'

class Issues extends Component {
  render() {
    const issueData = get(this, 'props.data.allWhitedwarfdataJson.edges')

    return (
      <Layout pageTitle="Issues">
        <h1>Issues</h1>
        <div>
          {issueData.map(({ node }) => {
            return (
              <IssueCard
                key={node.issue}
                issueCoverSrc = {node.coverSrc.childImageSharp.fixed}
                issueCoverAltText = {"The cover of White Dwarf magazine issue " + node.issue}
                issueLink = {"white-dwarf-magazine-issue-" + node.issue}
                issueNumber = {"White Dwarf " + node.issue}
                issueDate = {node.date}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Issues

export const issuesQuery = graphql`
  query {
    allWhitedwarfdataJson {
      edges {
        node {
          issue
          coverSrc {
            childImageSharp {
              fixed(width: 140, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          coverAltText
          date
        }
      }
    }
  }
`
