
import About from '@/components/About';
import Filters from '@/components/Filters'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Questions from '@/components/Questions';
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getFaqs, getResources, getResourcesPlaylist } from '@/sanity/actions'


export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist();
  const faqs = await getFaqs();
  
  console.log(resourcesPlaylist)

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Hero />
      </section>

      <section id="about" className="nav-padding w-full">
        <About />
        <div className="w-full nav-padding">
          <div className='flex flex-col w-full px-0 lg:px-28'>
              <h1 className='sm:heading1 heading3 !font-extrabold mb-6 text-center'>Fun FAQs About Me</h1>
              <div className="w-full text-base lg:text-lg text-slate-300">
                  {faqs.map((faq: any) => (
                      <Questions key={faq._id} title={faq.title} answer={faq.answer} />
                  ))}
                  
              </div>
          </div>
        </div>
      </section>

      <section id="projects" className="nav-padding w-full">
        <div className="flex-center relative w-full flex-col rounded-xl text-center">
          <h1 className="sm:heading1 heading2 text-center text-white">Projects</h1>
        </div>
        {/* <section className="mt-6 w-full">
          <SearchForm />
        </section> */}
        <div className='w-full flex-center'>
          <Filters />
        </div>
        
        {(searchParams?.query || searchParams?.category) && (
          <div className="flex-center mt-6 w-full flex-col sm:mt-8">
            <Header
              query={searchParams?.query || ''}
              category={searchParams?.category || ''}
            />

            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              {resources?.length > 0 ? (
                resources.map((resource: any) => (
                  <ResourceCard 
                    key={resource._id}
                    id={resource._id}
                    title={resource.title}
                    description={resource.description}
                    image={resource.image}
                    views={resource.views}
                    slug={resource._id}
                  />
                ))
              ) : (
                <p className='body-regular text-white-400'>Looks like I don't have any projects to show for that.</p>
              )}
            </div>
          </div>
        )}
      
        {resourcesPlaylist.map((item: any) => (
          <div key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-8">
            <h1 className="heading3 self-start text-white-800">{item.title}</h1>
            <div className="mt-8 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              {item.resources.map((resource: any) => (
                  <ResourceCard 
                    key={resource._id}
                    id={resource._id}
                    title={resource.title}
                    description={resource.description}
                    image={resource.image}
                    views={resource.views}
                    slug={resource._id}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>

      


    </main>
  )
}

export default Page