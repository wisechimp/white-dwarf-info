import type { GatsbyNode } from "gatsby"
import path from "path"
import { createClient } from "@supabase/supabase-js"

type BlogpostNodeType = {
  node: {
    id: string
    issueNumber: number
  }
}

const supabaseUrl = process.env.GATSBY_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY
const supabaseService = createClient(supabaseUrl, supabaseServiceKey)

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
          issueNumber: node.issueNumber,
        },
      })
    }
  )
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async (gatsbyUtils) => {
  const { actions, createNodeId, createContentDigest, reporter } = gatsbyUtils
  const { createNode } = actions

  const { data } = await supabaseService.from("articles").select()
  data!.forEach((article) => {
    createNode({
      id: createNodeId(article.id),
      issueNumber: article.issue_number,
      pageNumber: article.page_number,
      articleTitle: article.article_title,
      articleDescription: article.article_description,
      tag: article.tag,
      republished: article.republished,
      republishedPublication: article.republished_publication,
      internal: {
        type: "WhiteDwarfArticles",
        contentDigest: createContentDigest(article),
      },
    })
  })
}
