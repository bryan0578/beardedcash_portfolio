import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    image: string;
    altTag: string;
    url: string;
}

const Socials = ({ image, altTag, url }: Props) => {
  return (
        <li><Link href={url} target="_blank"><Image src={image} alt={altTag} width={50} height={50}/></Link></li>
  )
}

export default Socials