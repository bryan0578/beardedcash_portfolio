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
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
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
                <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
                <CardDescription className="text-white line-clamp-1 w-full text-left">{description}</CardDescription>
            </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
            <div className="flex-center body-medium gap-1.5 text-white">
                <Image 
                    src="/downloads.svg" width={20} height={20}
                    alt="views"
                />
                {views}
            </div>
            <Link href={`/resource/${id}`} className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
                Download Now 
                <Image src="/arrow-blue.svg" width={13} height={0} alt="arrow" />
            </Link>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>

  )
}

export default ResourceCard