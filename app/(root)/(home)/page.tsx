import About from '@/components/About';
import Contact from '@/components/Contact';
import Filters from '@/components/Filters'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Questions from '@/components/Questions';
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getFaqs, getResources, getResourcesPlaylist, getHero, getAbout, getSocials, getContact } from '@/sanity/actions'
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["devanagari", "latin", "latin-ext"]
});

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}


const Page = async ({ searchParams }: Props) => {
  const hero = await getHero();
  const about = await getAbout();
  const contact = await getContact();

  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })
  const resourcesPlaylist = await getResourcesPlaylist();
  const faqs = await getFaqs();

  return (
    <main className={poppins.className}>
      <div className={`flex-center paddings mx-auto w-full max-w-screen-2xl flex-col`}>
      <section id="home" className="nav-padding w-full">
        <Hero header={hero.header} subHeader={hero.subHeader} content={hero.content} button={hero.button} image={hero.image}/>
      </section>

      <section id="about" className="nav-padding w-full">
        <About {...about}/>
        <h3 className='base-bold !font-extrabold mb-4 text-center'>Fun FAQs About Me</h3>
          <div className="w-full text-base lg:text-lg text-slate-300">
              {faqs.map((faq: any) => (
                  <Questions key={faq._id} title={faq.title} answer={faq.answer} />
              ))}
              
          </div>
      </section>

      <section id="projects" className="nav-padding w-full">
        <div className="flex-center relative w-full flex-col rounded-xl text-center">
          <h2 className="sm:heading1 heading2 text-center text-white">Projects</h2>
        </div>
        {/* <section className="mt-6 w-full">
          <SearchForm />
        </section> 
        <div className='w-full flex-center'>
          <Filters />
        </div> */}
        
        {(searchParams?.query || searchParams?.category) && (
          <div className="flex-center mt-6 w-full flex-col sm:mt-8">
            <Header
              query={searchParams?.query || ''}
              category={searchParams?.category || ''}
            />

            <div className="mt-12 flex w-full flex-wrap rounded-lg justify-center gap-16 sm:justify-start">
              {resources?.length > 0 ? (
                resources.map((resource: any) => (
                  
                  <ResourceCard 
                    key={resource._id}
                    id={resource._id}
                    title={resource.title}
                    description={resource.description}
                    image={resource.image}
                    slug={resource.slug}
                  />
                ))
              ) : (
                <div className='flex-center mx-auto'>
                  <div className='flex-center p-12 border border-slate-700 rounded-xl w-full'>
                    <p className='body-regular !text-lg text-white'>Looks like I havent completed any projects for the chosen category check back again soon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      
         {resourcesPlaylist.map((item: any) => (
          <div key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-8">
            <h3 className="heading3 self-start text-white-800">{item.title}</h3>
            <div className="mt-8 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              {item.resources.map((resource: any) => (
                  <ResourceCard 
                    key={resource._id}
                    id={resource._id}
                    title={resource.title}
                    description={resource.description}
                    image={resource.image}
                    slug={resource.slug}
                  />
                ))}
            </div>
          </div>
        ))} 
      </section>

      <section id="contact" className="nav-padding w-full">
        <Contact {...contact} />
      </section>
      

    </div>
    </main>
  )
}

export default Page