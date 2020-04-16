import React from 'react'

import Menu from './menu'

export default (props) => (
  <div>
    <Menu pageTitle={props.pageTitle} />
    {props.children}
  </div>
)
