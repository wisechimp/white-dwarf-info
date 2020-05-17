const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const WhiteDwarfIssueTemplate = path.resolve(
    "./src/templates/whitedwarfissue.js"
  )

  return graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___issue }) {
        edges {
          node {
            excerpt
            frontmatter {
              date
              issue
              summary
              coverSrc
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const WhiteDwarfIssues = result.data.allMarkdownRemark.edges
    WhiteDwarfIssues.forEach(issue => {
      createPage({
        path: `/${"white-dwarf-magazine-issue-" +
          issue.node.frontmatter.issue}`,
        component: WhiteDwarfIssueTemplate,
        context: {
          issue: issue.node.frontmatter.issue,
          date: issue.node.frontmatter.date,
          summary: issue.node.frontmatter.summary,
          coverSrc: issue.node.frontmatter.coverSrc,
        },
      })
    })
  })
}
