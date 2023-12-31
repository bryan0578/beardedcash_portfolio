"use client"

import { formUrlQuery } from '@/sanity/utils';
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const links = ['all', 'frontend', 'backend', 'fullstack', 'mobile']

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    

    if (active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ['category'],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      });
    }

    console.log('newUrl:', newUrl); // Add this line to debug

    router.push(newUrl, { scroll: false });
  };

    return (
        <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleFilter(link)}
              className={`${
                active === link ? "gradient_primary" : ""
              } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize hover:bg-primary transition ease-in`}
            >
              {link}
            </button>
          ))}
        </ul>
      )
    }
    
    export default Filters