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
          id: issue.node.issue,
        },
      })
    })
  })
}
