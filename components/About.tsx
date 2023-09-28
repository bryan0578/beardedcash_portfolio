"use client";

import React, { useTransition, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from "@/components/ui/progress"
//simport { motion, useInView } from 'framer-motion';
// import { Progress } from 'flowbite-react';

// import TabButton from './TabButton';
import Questions from '@/components/Questions';
import Link from 'next/link';
import { getFaqs } from '@/sanity/actions';

const skills = [
    {
        title: 'Design Tools',
        value: '80'
    },
    {
        title: 'Front-End',
        value: '80'
    },
    {
        title: 'Back-End',
        value: '30'
    },
    {
        title: 'Full Stack',
        value: '66'
    },
    {
        title: 'SAPUI5',
        value: '66'
    },
    {
        title: 'Salesforce',
        value: '66'
    },
]    

const About = () => {

  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className="lg:col-span-1 flex-center">
                <div className='rounded-full bg-black-200 w-[250px] lg:w-[100%]'>
                        <Image src="/about-me.png" width={475} height={475} alt={""} className='min-w-[250px] w-[250px] lg:min-w-[100%] lg:w-[100%] rounded-bl-full rounded-br-full'/>
                </div>
            </div>
            <div className="flex-center lg:col-span-2">
                <div>
                    <h1 className='sm:heading1 heading2 !font-extrabold mb-4 text-center lg:text-left text-white-200'>About Me</h1>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                    I am a UX/UI designer who has a deep appreciation for aesthetics and user experience. I often look at mobile and web apps and think about my own 
                    experience and if the apps have a good user experience and what I would have done to make it better.
                    </p>
                    <br/>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>I’m also a full-stack developer, although I do love coding front-end more 
                    (that’s the designer in me). I’m very dedicated and passionate about coding, I love learning new technologies, which is very important in the world of 
                    technology as it is always growing. </p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
            <div className="lg:col-span-2">
                <div>      
                    <h2 className='base-bold !font-extrabold mb-4 text-center lg:text-left'>A Little More About Me</h2>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                    I am also a musician and drummer, I love the music, depending on the melodies and rhythms can change the driving emotion of a song. Kind of similar to how designing and coding can impact the user experience of an application. I really enjoy the whole creative 
    process of creating something new or enhancing  something old whether it be a song or an application. The process where you think about what you want to create or enhance, what the audience wants to see and hear and how to present the finished piece of art. Everything working in perfect harmony and completely balanced.
                    </p>
                    <br/>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>Above all I am a loving and dedicated husband and father. My family is the reason I excel in the various roles 
    in my life. I take inspiration from the love that I have from  my family to continue my creative journey.</p>
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="w-full px-0 md:px-16 pt-12 lg:p-0">
                    <div className='flex flex-col w-full'>
                        <h2 className='base-bold !font-extrabold mb-4 text-center lg:text-left'>Skills</h2>
                        <div>
                            {skills.map((skill: any, index)=> (
                                <ul key={index}>
                                    <li>
                                        <p className='base-text font-semibold text-white-100 mb-2'>{skill.title}</p>
                                        <Progress value={skill.value} className='h-[10px] bg-primary/20 mb-3 transition ease-in-out' />
                                    </li>
                                </ul> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About