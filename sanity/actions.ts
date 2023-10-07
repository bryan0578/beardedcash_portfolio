import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';
import { Project } from '@/types/Project';

interface GetResourcesParams {
    query: string;
    category: string;
    page: string;
}
interface GetProjectsParams {
    query: string;
    category: string;
    page: string;
}

export const getCategories = async () => {
    const query = `*[_type == 'category'] {
        _id,
        title,
        // Add more fields as needed
      }`;
    
      try {
        // Fetch data from Sanity
        const categories = await readClient.fetch(query);
        return categories;
      } catch (error) {
            console.error('Error fetching categories from Sanity:', error);
        return [];
      }
}

// Get the Navigation Data
export const getNav = async () => {
    try {
        const nav = await readClient.fetch(
            groq`*[_type == "nav"][0]{
                "image": logo.asset->url,
                navLinks[] {
                    label,
                    url
                }
            }`
        )
        return nav
    } catch (error) {
        console.log(error)
    }
}

// Get the Hero Data 
export const getHero = async () => {
    try {
        const hero = await readClient.fetch(
            groq`*[_type == "hero"][0]{
                "image": heroImage.asset->url,
                header,
                subHeader,
                content,
                button
            }`
        );
        return hero;
    } catch (error) {
        console.log(error);
    }
}

export const getAbout = async () => {
    try {
        const about = await readClient.fetch(
            groq`*[_type == "about"][0]{
                header,
                subHeader,
                content,
                contentP2,
                addSubHeader,
                addContent,
                addContentP2,
                "image": aboutImage.asset->url,
                socialLinks[] {
                    "socialIcon": socialIcon.asset->url,
                    altTag,
                    url,
                    mailTo
                },
                skillsSubHeader,
                skills[] {
                    title,
                    value
                }
            }`
        );
        return about
    } catch (error) {
        console.log(error)
    }
}

export const getSocials = async () => {
    try {
        const socials = await readClient.fetch(
            groq`*[type == "socials"]{
                "image": socialIcon.asset->url,
                altTag,
                url
            }`
        );

        return socials
    } catch (error) {
        console.log(error);
    }
}
export const getFaqs = async () => {
    try {
        const faqs = await readClient.fetch(
            groq`*[_type == "faqs"]{
                _id,
                title,
                answer
            }`
        );

        return faqs;
    } catch (error) {
        console.log(error);
    }
}

export const getContact = async () => {
    try {
        const contact = await readClient.fetch(
            groq`*[_type == "contact"][0]{
                header,
                subHeader,
                content,
                follow,
                emailLabel,
                emailText,
                contactMailTo,
                "image": contactImage.asset->url,
                altTag
                
            }`
        );
        return contact
    } catch (error) {
        console.log(error)
    }
}
export const getResourcesPlaylist = async () => {
    try {
        const resources = await readClient.fetch(
            groq`*[_type == "resourcePlaylist"]{
                _id,
                title,
                resources[0...6]-> {
                    title,
                    _id,
                    description,
                    "image": poster.asset->url,
                    views,
                    category,
                    "slug": slug.current,
                }
            }`
        );

        return resources;
    } catch (error) {
        console.log(error);
    }
}

export const getProjectsPlaylist = async () => {
    try {
        const projects = await readClient.fetch(
            groq`*[_type == "projectPlaylist"]{
                _id,
                title,
                projects[0...6]-> {
                    title,
                    _id,
                    description,
                    shortdescription
                    "image": poster.asset->url,
                    technology,
                    category,
                    "slug": slug.current,
                }
            }`
        );

        return projects;
    } catch (error) {
        console.log(error);
    }
}

export const getResources = async (params: GetResourcesParams) => {
    const { query, category, page } = params;

    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page),
            })}{
                title,
                _id,
                description,
                "image": poster.asset->url,
                views,
                slug,
                category
            }`
        );

        return resources;
    } catch (error) {
        console.log(error);
        return []
    }
}


export const getResource = async (): Promise<Project[]> => {
    try {
        const resource = await readClient.fetch(
            groq`*[_type == "resource"]{
                _id,
                title,
                shortdescription,
                description,
                technology,
                "image": poster.asset->url,
                gitHub,
                liveLink,
                "slug": slug.current,
                category,
            }`
        );

        return resource;
    } catch (error) {
        console.log(error);
        return []
    }
}

export async function getProjects(): Promise<Project[]> {
    
    return readClient.fetch(
        groq`*[_type == "project]{
            _id,
            title,
            shortdescription,
            description,
            technology,
            "image": poster.asset->url,
            gitHub,
            liveLink,
            "slug": slug.current,
            category,
        }`
    );
}

export const getProject = async (slug: string) => {
    try {
        const project = await readClient.fetch(
            groq`*[_type == "project" && slug.current == $slug][0]{
                title,
                _id,
                description,
                technology,
                "image": poster.asset->url,
                gitHub,
                liveLink,
                "slug": slug.current,
                category
            }`,
            { slug: slug }
        );

        return project;
    } catch (error) {
        console.log(error);
    }
}