import { IGatsbyImageData } from "gatsby-plugin-image"

type WdIssueType = {
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

export default WdIssueType
