import React from "react"
import ReactHTMLParser from "react-html-parser"

import WdArticleType from "../../types/wdArticleType"

interface ArticleListInterface {
  edges: {
    node: WdArticleType
  }[]
}

const ArticlesList = ({ edges }: ArticleListInterface) => {
  return (
    <div>
      {edges.map(({ node }) => {
        const { id, articleTitle, articleDescription, pageNumber } = node

        const articleDescriptionHtml = ReactHTMLParser(articleDescription)
        return (
          <div key={id}>
            <p>
              p{pageNumber} - {articleTitle}: {articleDescriptionHtml}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesList
