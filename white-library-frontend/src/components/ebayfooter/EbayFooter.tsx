import React from "react"

interface EbayFooterProps {
  issueNumber: number
}

const EbayFooter = ({ issueNumber }: EbayFooterProps) => {
  return (
    <ins
      className='epn-placement'
      data-config-id='5ef1f3585da29225ccf11f71'
      data-keyword={`white dwarf ${issueNumber}`}
    ></ins>
  )
}

export default EbayFooter
