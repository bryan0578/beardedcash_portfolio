import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col'>
      <div className="flex-center">
        <Image src="/BeardLogoOrange-8.svg" width={45} height={45} alt={''}/>
        <h1 className='hidden lg:block pl-4 font-semibold'>Beardedcash Designer | Developer</h1>
      </div>
        
        <p>Copyright © 2023 BeardedCash | All Rights Reserved</p>
        <div className='block'>
          <ul>
            <li className='mb-2'><Link href="https://people.sap.com/bryan_cash7897">SAP Community Profile</Link></li>
            <li className='mb-2'><Link href="https://www.salesforce.com/trailblazer/bryancash78">Salesforce Trailhead Profile</Link></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer