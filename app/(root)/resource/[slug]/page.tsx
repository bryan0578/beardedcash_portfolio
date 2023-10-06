import { getProjects, getResource } from '@/sanity/actions';
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
interface Props {
  params: { slug: string }
};
const Page = async ({ params }: Props) => {
  console.log(params)
  // const router = useRouter();
  // const { slug1 } = router.query;
  const slug = params.slug;
  console.log(slug)
  // const slug = { slug1 }
  
  const resource = await getResource()
  // console.log(resource)


  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <h1 className='sm:heading1 heading2 !font-extrabold mb-4 text-center text-white-200'>{resource.title}</h1>
        <div className='flex-center w-full object-cover'>
          <Image src={resource.image} alt="project title" width={800} height={800} className='object-cover'/>
        </div>
        <div className="">
          <p>{resource.description}</p>
          <p>{resource.category}</p>
        </div>
      </section>
      
    </main>
  )
}

export default Page