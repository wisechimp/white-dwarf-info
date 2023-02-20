import React from "react"

interface LayoutProps {
  pageTitle: string
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ pageTitle, children }: LayoutProps) => (
  <main>
    <h1>{pageTitle}</h1>
    {children}
  </main>
)

export default Layout
