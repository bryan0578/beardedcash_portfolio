import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface Props {
    title: string;
    answer: string;
}
  const Questions = ({ title, answer }: Props) => {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="text-base lg:text-lg text-slate-100">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
  export default Questions