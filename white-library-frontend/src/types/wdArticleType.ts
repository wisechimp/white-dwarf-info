type WdArticleType = {
  id: number
  issueNumber: number
  pageNumber: number
  articleTitle: string
  articleDescription: string
  tag: Array<string>
  republished: boolean
  republishedPublication: string
}
export default WdArticleType
