import React from "react"

import ebayFooterStyles from "./ebayfooter.module.css"

export default props => {
  return (
    <div className={ebayFooterStyles.ebayBanner}>
      <ins
        className="epn-placement"
        data-config-id="5ef1f3585da29225ccf11f71"
        data-keyword={"white dwarf " + props.issueNumber + " -weekly"}
      ></ins>
    </div>
  )
}
