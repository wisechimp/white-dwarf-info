import React from "react"

import Menu from "./menu"
import Header from "./head"

export default props => (
  <div>
    <Header />
    <Menu pageTitle={props.pageTitle} />
    {props.children}
  </div>
)
