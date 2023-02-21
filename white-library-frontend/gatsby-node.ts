import type { GatsbyNode } from "gatsby"
import path from "path"

type BlogpostNodeType = {
  node: {
    id: string
    issueNumber: number
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  const issuesData: {
    errors?: any
    data?: {
      allSanityIssue: {
        edges: { node: { id: string; issueNumber: number } }[]
      }
    }
  } = await graphql(`
    query IssuesNumbers {
      allSanityIssue {
        edges {
          node {
            id
            issueNumber
          }
        }
      }
    }
  `)

  if (issuesData.errors) {
    throw issuesData.errors
  }

  const issueTemplate = path.resolve(`src/templates/whitedwarfissue.tsx`)
  issuesData.data?.allSanityIssue.edges.forEach(
    ({ node }: BlogpostNodeType) => {
      const issuePath = `/white-dwarf-magazine-issue-${node.issueNumber}`
      createPage({
        path: issuePath,
        component: issueTemplate,
        context: {
          id: node.id,
        },
      })
    }
  )
}
