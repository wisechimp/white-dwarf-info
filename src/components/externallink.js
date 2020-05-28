import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default props => (
  <OutboundLink
    href={props.externalLinkHref}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.externalLinkTitle}
  </OutboundLink>
)
