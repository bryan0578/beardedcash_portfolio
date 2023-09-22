"use client";

import React, { useTransition, useState, useRef } from 'react';
import Image from 'next/image';
//simport { motion, useInView } from 'framer-motion';
// import { Progress } from 'flowbite-react';

// import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
                <li>SAP Business Technology Platform</li>
                <li>SAPUI5</li>
                <li>Fiori</li>
                <li>Salesforce UI Development</li>
                <li>Apex</li>
                <li>Lightning Components</li>
                <li>Aura Components</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>TailwindCSS</li>
                
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Full Sail University</li>
                <li>University of Phoenix</li>
                <li>Salesforce Trailblazer</li>
                <li>SAP Learning Hub</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>
        )
    }
]
    

const About = () => {
    // const [tab, setTab] = useState("skills");
    // const [isPending, startTransition] = useTransition();
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    // const handleTabChange =(id) => {
    //     startTransition(() => {
    //         setTab(id);
    //     })
    // }
    // const cardVariants = {
    //     initial: { y:-50, opacity:0 },
    //     animate: { y:0, opacity:1 },
    // }

    // const textVariant = {
    //   initial: { y:0, opacity:0 },
    //   animate: { y:0, opacity:1 },
    // }
  return (
    <section id="about" className='nav-padding w-full h-[100vh]'>
        <div className='flex-between relative min-h-[274px] w-full flex-col lg:flex-row rounded-xl text-left'>
            <div className='rounded-full bg-black-200'>
                <Image src="/about-me.png" width={400} height={400} alt={""} className='min-w-[250px] w-[250px] sm:w-[250px] sm:min-w-[400px] rounded-bl-full rounded-br-full'/>
            </div>
            <div className='flex flex-col w-[46rem]'>
                <h1 className='sm:heading1 heading2 mb-2 text-center lg:text-left text-white'>About Me</h1>
                <h2 className='heading4 mb-6 text-gradient_grey-white text-center lg:text-left'>Musician, Star Wars Enthusiast, and more</h2>
                <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                Hi! I'm Your Bryan, a passionate web designer and developer with a creative vision and a knack for turning ideas into digital reality.
                With a background in both design and coding, I bring a unique blend of aesthetics and functionality to every project I undertake. 
                My goal is to create stunning and user-friendly websites that not only meet but exceed your expectations. When I'm not coding, you can 
                find me exploring the latest web trends, experimenting with new design techniques, and continuously expanding my skill set to stay at 
                the forefront of the ever-evolving digital landscape. Let's embark on this web journey together. Feel free to explore my portfolio and 
                connect with me.
                </p>
                <ul className='flex-start flex-row text-white'>
                    <li>
                        Skills
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Skills
                    </li>
                </ul>
            </div>
            
        </div>
        {/* <SearchForm /> */}
    </section>
    
  )
}

export default About