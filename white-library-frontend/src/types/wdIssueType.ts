import { IGatsbyImageData } from "gatsby-plugin-image"

type WdIssueType = {
  data: {
    sanityIssue: {
      id: string
      date: string
      issueNumber: number
      summary: string
      coverImage: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export default WdIssueType
