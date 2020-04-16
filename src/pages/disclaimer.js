import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => (
  <Layout pageTitle="Disclaimer">
    <h1>Disclaimer</h1>
    <p>
      This web site is completely unofficial and in no way endorsed by Games
      Workshop Limited.
    </p>
    <p>
      40k, Adeptus Astartes, Blood Angels, Bloodquest, Cadian, Catachan, Chaos,
      the Chaos device, the Chaos logo, Citadel, Citadel Device, Cityfight,
      Codex, Daemonhunters, Dark Angels, Dark Eldar, Dawn of War, 'Eavy Metal,
      Eldar, Eldar symbol devices, Eye of Terror, Fire Warrior, the Fire Warrior
      logo, Forge World, Games Workshop, Games Workshop logo, Genestealer,
      Golden Demon, Gorkamorka, Great Unclean One, GW, GWI, the GWI logo,
      Inquisitor, the Inquisitor logo, the Inquisitor device, Inquisitor:
      Conspiracies, Keeper of Secrets, Khorne, the Khorne device, Kroot, Lord of
      Change, Necron, Nurgle, the Nurgle device, Ork, Ork skull devices, Sisters
      of Battle, Slaanesh, the Slaanesh device, Space Hulk, Space Marine, Space
      Marine chapters, Space Marine chapter logos, Tau, the Tau caste
      designations, Tyranid, Tyrannid, Tzeentch, the Tzeentch device,
      Ultramarines, Warhammer, Warhammer 40k Device, White Dwarf, the White
      Dwarf logo, and all associated marks, names, races, race insignia,
      characters, vehicles, locations, units, illustrations and images from the
      Warhammer 40,000 universe are either ®, TM and/or © Games Workshop Ltd
      2000-2020, variably registered in the UK and other countries around the
      world. Used without permission. No challenge to their status intended. All
      Rights Reserved to their respective owners.
    </p>
    <p>
      Now please <Link to="/">return</Link> to the fun part of the website!
    </p>
  </Layout>
)
