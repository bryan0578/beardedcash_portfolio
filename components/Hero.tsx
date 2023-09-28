import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex-center w-full flex-col lg:flex-row rounded-xl text-left mt-[100px] mb-[100px]'> 
      <div className='flex-center lg:flex-start lg:my-auto flex-col w-full text-left mt-12 order-last lg:order-first'>
          <h1 className='sm:heading2 heading3 !font-extrabold mb-4 text-center lg:text-left text-white-200'>Hello I'm Bryan Cash.</h1>
          <p className='flex-start text-base lg:text-lg text-slate-300 text-center mb-6'>
            I design and develop responsive web applications
          </p>
          <div className='flex-center lg:flex-start w-full lg:w-[50%]'>
            <Button className='rounded-full px-10'><Link href="/#about">Learn More</Link></Button>
          </div>
      </div>
      <div className="w-full flex-center lg:flex-end">
          <div className='rounded-full bg-black-200 w-[250px] lg:w-[475px] mt-8'>
              <Image src="/hero-me2.png" width={475} height={475} alt={""} className='min-w-[250px] w-[250px] lg:w-[475px] lg:min-w-[475px] rounded-bl-full rounded-br-full'/>
          </div>
      </div>
    </div>
  )
}

export default Hero