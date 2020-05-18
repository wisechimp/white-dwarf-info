exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const WhiteDwarfIssueTemplate = require.resolve(
    "./src/templates/whitedwarfissue.js"
  )

  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              slug
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
        path: issue.node.frontmatter.slug,
        component: WhiteDwarfIssueTemplate,
        context: {
          slug: issue.node.frontmatter.slug,
        },
      })
    })
  })
}
