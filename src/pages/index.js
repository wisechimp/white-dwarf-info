import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
  <Layout pageTitle="White Library">
    <h1>The White Library - An Unofficial Database for White Dwarf Magazine</h1>
    <p>
      Welcome to The White Library, an <Link to="/disclaimer">unofficial</Link> database for Games Workshop's White Dwarf magazine. If you're looking to locate a particular article or just want to take a nostalgic browse through old issues then please feel free to look around. The very nature of the website means it should never be complete (unless White Dwarf stops being published!) so if you'd like to contribute then feel free to help us out with an issue that hasn't currently been included, or alternatively feel free to just drop us a line to reminisce about your favourite issue. The best contributions may even find their way onto the website.
    </p>
    <p>Have fun!</p>
  </Layout>
)
