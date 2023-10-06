"use client";

import React, { FC } from 'react';
import Image from 'next/image';
import { Progress } from "@/components/ui/progress"
import Link from 'next/link';

interface SocialLinks {
    socialIcon: string;
    altTag:string;
    url:string;
    mailTo: string;
}

interface Skills {
    title: string;
    value: string;
}

interface Props {
    header : string;
    subHeader : string;
    content : string;
    contentP2 : string;
    addSubHeader : string;
    addContent : string;
    addContentP2 : string;
    image : string;
    skillsSubHeader: string;
    socialLinks: SocialLinks[];
    skills: Skills[];
} 

const About: FC<Props> = ({
    header,
    subHeader,
    content,
    contentP2,
    addSubHeader,
    addContent,
    addContentP2,
    image,
    skillsSubHeader,
    socialLinks,
    skills,
}) => {
    
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32'>
            <div className="lg:col-span-1 flex-center">
                <div className='rounded-full bg-black-200 w-[250px] lg:w-[100%]'>
                        <Image src={image} width={475} height={475} alt={""} className='min-w-[250px] w-[250px] lg:min-w-[100%] lg:w-[100%] rounded-bl-full rounded-br-full'/>
                </div>
            </div>
            <div className="flex-center lg:col-span-2">
                <div>
                    <h1 className='sm:heading1 heading2 !font-extrabold mb-4 text-center lg:text-left text-white-200'>{header}</h1>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                        {content}
                    </p>
                    <br/>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                        {contentP2}
                    </p>
                    <ul className='flex-start gap-8 mt-8'>
                        {socialLinks.map((social, index) => (
                            <li key={index}><Link href={`${social.url !== null ? social.url : social.mailTo}`} target="_blank"><Image src={social.socialIcon} alt={social.altTag} width={50} height={50}/></Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-32'>
            <div className="lg:col-span-2">
                <div>      
                    <h2 className='base-bold !font-extrabold mb-4 text-center lg:text-left'>{addSubHeader}</h2>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                        {addContent}
                    </p>
                    <br/>
                    <p className='text-base lg:text-lg text-slate-300 text-center lg:text-left'>
                        {addContentP2}
                    </p>
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="w-full px-0 md:px-16 pt-12 lg:p-0">
                    <div className='flex flex-col w-full'>
                        <h2 className='base-bold !font-extrabold mb-4 text-center lg:text-left'>{skillsSubHeader}</h2>
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