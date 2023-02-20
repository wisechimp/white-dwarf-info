import React from "react"

const Layout = ({ pageTitle, children }) => (
  <main>
    <h1>{pageTitle}</h1>
    {children}
  </main>
)

export default Layout
