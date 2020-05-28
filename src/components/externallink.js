import React from "react"

export default props => (
  <a href={props.externalLinkHref} target="_blank" rel="noopener noreferrer">
    {props.externalLinkTitle}
  </a>
)
