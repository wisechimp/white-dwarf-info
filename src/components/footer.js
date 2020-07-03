import React, { useEffect, useState } from "react"
import lazySizes from "lazysizes"
import axios from "axios"

import footerStyles from "./footer.module.css"

export default props => {
  const [auctions, setAuctions] = useState([])

  const apiRoot = "https://svcs.ebay.com/services/search/FindingService/v1"
  const operationName = "OPERATION-NAME=findItemsByKeywords"
  const serviceVersion = "SERVICE-VERSION=1.0.0"
  const securityAppName =
    "SECURITY-APPNAME=StuartHi-whitelib-PRD-2c8e704f5-7be176eb"
  const globalId = "GLOBAL-ID=EBAY-GB"
  const keywords = "keywords=%22white+dwarf%22+" + props.issueNumber + "-weekly"
  const responseFormat = "RESPONSE-DATA-FORMAT=JSON"
  const ebayUrl =
    apiRoot +
    "?" +
    operationName +
    "&" +
    serviceVersion +
    "&" +
    securityAppName +
    "&" +
    globalId +
    "&" +
    keywords +
    "&" +
    responseFormat

  console.log("Final url is " + ebayUrl)

  useEffect(() => {
    async function fetchAuctions() {
      const auctionsData = await axios(ebayUrl, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      setAuctions(auctionsData.data)
    }
    fetchAuctions()
  })

  console.log(auctions)

  return (
    <div className={footerStyles.ebayBanner}>
      <ins
        className="epn-placement lazyload"
        alt={lazySizes}
        data-config-id="5ef1f3585da29225ccf11f71"
        data-keyword={"white dwarf " + props.issueNumber + " -weekly"}
      ></ins>
    </div>
  )
}
