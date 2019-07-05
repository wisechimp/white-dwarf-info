const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const WhiteDwarfIssueTemplate = path.resolve("./src/templates/whitedwarfissue.js")

  return graphql(`
    query {
      allWhitedwarfdataJson {
        edges {
          node {
            issue
            coverSrc {
              childImageSharp {
                fluid(maxWidth: 420, maxHeight: 600) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
            date
            summary
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const WhiteDwarfIssues = result.data.allWhitedwarfdataJson.edges
    WhiteDwarfIssues.forEach(issue => {
      createPage({
        path: `/${"white-dwarf-magazine-issue-" + issue.node.issue}`,
        component: WhiteDwarfIssueTemplate,
        context: {
          issue: issue.node.issue,
          date: issue.node.date,
          summary: issue.node.summary,
          coverSrc: issue.node.coverSrc,
        },
      })
    })
  })
}
