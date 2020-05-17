import React from "react"
//import Img from 'gatsby-image'

import Layout from "../components/layout"
import styles from "./whitedwarfissue.module.css"

const WhiteDwarfIssueTemplate = props => {
  const { pageContext } = props
  const { issue, date, summary, coverSrc, contents } = pageContext
  console.log(pageContext)
  return (
    <Layout pageTitle={"White Dwarf " + issue}>
      <h1>{"White Dwarf " + issue}</h1>
      <p>{date}</p>
      <p>{summary}</p>
      <img
        src={coverSrc}
        alt={"The cover of White Dwarf magazine issue " + issue}
      />
      <p dangerouslySetInnerHTML={{ __html: contents }} />
    </Layout>
  )
}

export default WhiteDwarfIssueTemplate
