import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import styles from './whitedwarfissue.module.css'

const WhiteDwarfIssueTemplate = ({ data }) => (
  <Layout pageTitle={"White Dwarf " + data.allWhitedwarfdataJson.edges.node.issue}>
    <h1>{"White Dwarf " + data.allWhitedwarfdataJson.edges.node.issue}</h1>
  </Layout>
  // <Layout pageTitle="White Dwarf 101">
  //   <h1>"White Dwarf 101"</h1>
  // </Layout>
)

export default WhiteDwarfIssueTemplate

export const query = graphql`
  query {
    allWhitedwarfdataJson {
      edges {
        node {
          issue
          coverSrc {
            childImageSharp {
              fixed(width: 140, height: 200) {
                src
              }
            }
          }
          date
        }
      }
    }
  }
`
