
import { getProject } from '@/sanity/actions';
import Image from 'next/image'
import React from 'react'
interface Props {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
}
const ProjectDetails = ({title, description, image, category}: Props) => {
  
  return (
    <section className="nav-padding w-full">
        <h1 className='sm:heading1 heading2 !font-extrabold mb-4 text-center text-white-200'>{title}</h1>
        <div className='flex-center w-full object-cover'>
          <Image src={image} alt="project title" width={800} height={800} className='object-cover'/>
        </div>
        <div className="">
          <p>{description}</p>
          <p>{category}</p>
        </div>
      </section>
  )
}

export default ProjectDetails