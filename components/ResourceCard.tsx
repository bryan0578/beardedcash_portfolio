import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
  

interface Props {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

const ResourceCard = ({ id, title, description, image, slug }: Props) => {
    
  return (
    <Card className="w-full max-w-fit border border-slate-700 !bg-black-200 sm:max-w-[356px]">
        <Link id="project" href={`/resource/${slug}`} >
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="w-full h-[200px]">
                    <Image 
                        src={image}
                        className="h-full rounded-lg object-cover"
                        alt={title}
                        width={384}
                        height={440}
                    />
                </div>
                <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left !px-4">{title}</CardTitle>
                {/* <CardDescription className="text-white w-full text-left">{description}</CardDescription> */}
            </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0 px-4 pb-4">
            <div className="flex-center body-medium gap-1.5 text-white">
                {/* <Image 
                    src="/downloads.svg" width={20} height={20}
                    alt="views"
                />
                {views} */}
                <Link href={`/`} className="flex-center text-gradient_primary body-semibold gap-1.5">
                    <div className="flex-center rounded-full bg-slate-900 w-[42px] h-[42px] hover:bg-slate-600 transition ease-in-out duration-200">
                        <Image src="/github.svg" width={28} height={28} alt="arrow" />
                    </div>
                    
                </Link>
            </div>
            <Link href={`/`} className="flex-center text-gradient_primary body-semibold gap-1.5">
                View Project
            </Link>
        </CardContent>
    </Card>

  )
}

export default ResourceCard