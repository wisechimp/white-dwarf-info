import React from "react"
import ExternalLink from "../components/externallink"

import Layout from "../components/layout"

export default () => (
  <Layout pageTitle="Searching the Library">
    <h1>Searching the Library</h1>
    <p>
      Ideally one of the the intentions of this website is to help visitors find
      information on a particular topic, be it additional rules for a particular
      version of WFB, or a race in W40k, or some obscure game which was released
      donkey's years ago. Producing tables of references for specific gaming
      systems is not beyond the scope of this website and will be a future
      project when the website is up and running at full steam (whatever that
      is!). However in the meantime a useful method for visitors to find which
      issues of White Dwarf magazine included certain rules or pictures, is to
      take advantage of Google's site search command. Simply enter the word or
      phrase you are searching for and then add the command{" "}
      <i>site: whitelibrary.info</i> (you can simply copy and paste it from here
      if you like).
    </p>

    <p>
      For example if you would like to find which issues of White Dwarf feature{" "}
      <ExternalLink
        externalLinkHref="http://lmgtfy.com/?q=terminators+site%3Awhitelibrary.info"
        externalLinkTitle="Terminators"
      />{" "}
      then you can search as in the link. (For your information sometimes this
      website is a little slow to display the google search results in which
      case choosing "Images" search then flicking back to "All" encourages it to
      display the search results prioperly.)
    </p>

    <p>
      In an effort to make the site search friendly I have tried to include
      consistent labels to distinguish which game system, and which edition, an
      article refers to. So if article relates to the a specific edition of
      Warhammer Fantasy Battle I will include WFB xth Ed. often in brackets. So
      if you want to find the third edition WFB articles in White Dwarf all you
      have to do is enter this into your search between quotation marks, and
      they should all pop up (hopefully!).
    </p>

    <p>
      If you need help getting around then please feel free to contact me, check
      out <a href="help.php">"Help Me!"</a> for details.
    </p>
  </Layout>
)
