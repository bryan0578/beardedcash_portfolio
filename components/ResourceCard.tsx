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
    views: number;
    slug: string;
}

const ResourceCard = ({ id, title, description, image, views, slug }: Props) => {
  return (
    <Card className="w-full max-w-fit border border-slate-700 !bg-black-200 sm:max-w-[356px]">
        <Link id="project" href={`/resource/${id}`}>
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="h-fit w-full">
                    <Image 
                        src={image}
                        className="h-full rounded-md object-cover"
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
                <Image 
                    src="/downloads.svg" width={20} height={20}
                    alt="views"
                />
                {views}
            </div>
            <Link href={`/resource/${id}`} className="flex-center text-gradient_sea body-semibold gap-1.5">
                View Github
                <Image src="/arrow-blue.svg" width={13} height={0} alt="arrow" />
            </Link>
        </CardContent>
    </Card>

  )
}

export default ResourceCard