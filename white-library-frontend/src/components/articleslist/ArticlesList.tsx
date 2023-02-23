import React from "react"
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
        return (
          <p key={id}>
            p{pageNumber} - {articleTitle}: {articleDescription}
          </p>
        )
      })}
    </div>
  )
}

export default ArticlesList
