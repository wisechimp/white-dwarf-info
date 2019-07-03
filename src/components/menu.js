import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default (props) => (
  <Navbar expand="sm">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand className="actionBar">{props.pageTitle}</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/issues/">Issues</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/helpme/">Help Me!</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/links/">Links</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/disclaimer/">Disclaimer</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
