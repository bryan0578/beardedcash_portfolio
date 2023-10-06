import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    title: string;
    shortdescription: string;
    description: PortableTextBlock[];
    slug: string;
    image: string;
    technology: string;
    gitHub: string;
    liveLink: string;
    category: string;
}