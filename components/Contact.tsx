import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface Props {
    image:string;
    altTag:string;
    header:string;
    content:string;
    follow:string;
    emailLabel:string;
    emailText:string;
    contactMailTo: string;
}
const Contact = ({ image, altTag, header, content, follow, emailLabel, emailText, contactMailTo}: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32'>
        <div className='lg:col-span-2 text-center lg:text-left'>
            <h2 className='sm:heading1 heading2 !font-extrabold mb-4 text-center lg:text-left text-white-200'>{header}</h2>
            <p className='mb-4 text-center lg:text-left'>{content}</p>
            <label className='text-center lg:text-left font-semibold'>{emailLabel}{':  '} </label>
            <span>
                <Link className='hover:text-primary transition ease-in' href={contactMailTo} target="_blank">{emailText}</Link>
            </span>
            <h3 className='base-bold !font-extrabold my-4 text-center lg:text-left'>{follow}</h3>
            <ul className='flex-center lg:flex-start gap-8 mt-4'>
                <li><Link href={'https://www.linkedin.com/in/cashbryan/'} target="_blank"><Image src="/linkedin.svg" alt="Linkedin" width={50} height={50}/></Link></li>
                <li><Link href={'https://github.com/bryan0578'} target="_blank"><Image src="/github.svg" alt="github" width={50} height={50}/></Link></li>
                <li><Link href={'https://twitter.com/beardedcash'} target="_blank"><Image src="/twitter.svg" alt="twitter" width={50} height={50}/></Link></li>
                {/* <li><Link href={'mailto:bryan@cashbryan.com'} target="_blank"><Image src="/inbox.svg" alt="email" width={50} height={50}/></Link></li> */}
            </ul>
        </div>
        <div className="lg:col-span-1 flex-center">
            <div className='rounded-full bg-black-200 w-[250px] lg:w-[100%]'>
                    <Image src={image} width={475} height={475} alt={altTag} className='min-w-[250px] w-[250px] lg:min-w-[100%] lg:w-[100%] rounded-bl-full rounded-br-full'/>
            </div>
        </div>
        
    </div>
  )
}

export default Contact