
import React,{Fragment} from 'react'

import Hero from '@/components/Hero'
import Subsidy from '@/components/Subsidy'
import Earth from '@/components/Earth'
import Bijli from '@/components/Bijli'
import Calculator from '@/components/Calculator'
import Choose from '@/components/Choose'
import Stand from '@/components/Stand'
import Faq from '@/components/Faq'
import Trust from '@/components/Trust'
import Services from '@/components/Services'



const page = () => {
  return (
   <Fragment>
    
     <Hero/>
     <Subsidy/>
     <Earth/>
     <Bijli/>
     <Calculator/>
     <Choose/>
     <Stand/>
     
     <Services/>
     <Faq/>
     <Trust/>
     
   </Fragment>
  )
}

export default page
