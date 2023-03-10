import { PartnersDescription, PartnersHeader, PartnersList, PartnersListMobile } from '@/components/Partners'
import React from 'react'

const Partners = () => {
  return (
    <section className="w-full h-full">
      <PartnersHeader/>
      <PartnersDescription/>
      <PartnersList/>
      <PartnersListMobile/>
    </section>
  )
}

export default Partners