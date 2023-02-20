import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout/Layout"

const Disclaimer = () => (
  <Layout pageTitle='Disclaimer'>
    <p>
      This web site is completely unofficial and in no way endorsed by Games
      Workshop Limited.
    </p>
    <p>
      Warhammer, Warhammer 40000, Horus Heresy, Warhammer Age of Sigmar, White
      Dwarf, and all associated marks, names, races, race insignia, characters,
      vehicles, locations, units, illustrations and images from the Warhammer
      Universe are either ®, TM and/or © Copyright Games Workshop Ltd 2000-2023,
      variably registered in the UK and other countries around the world. Used
      without permission. No challenge to their status intended. All Rights
      Reserved to their respective owners.
    </p>
    <p>
      Now please <Link to='../'>return</Link> to the fun part of the website!
    </p>
  </Layout>
)

export default Disclaimer
