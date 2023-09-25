import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      title: 'Are you related to Johnny Cash?',
      answer: 'No. I am not related to Johnny Cash as far as I know. ALthough I do joke around sometimes about my "good old Uncle Johnny" lol.'
    },
    {
      title: 'Do you ride a motorcycle?',
      answer: 'No. A lot of people see pictures of me, a big guy with a long beard and say that I look like a biker type. But no the closest I have come to riding a motorcycle was on the back of my uncles motorcycle when I was a kid (not uncle Johnny lol).'
    },
    {
      title: 'What instruments do you play?',
      answer: 'I can play guitar, saxaphone, trombone, bass guitar, but my favorite by far is drums.'
    },
    {
      title: 'Did you ever play in a band?',
      answer: 'Yes. I was in various bands when I was younger playing Drums. One of the bands I played in was signed to a record label and I had the opportunity to record two full-length recordings and tour most of Canada and the US.'
    },
    {
      title: 'Are you always this quiet?',
      answer: 'Yes. I am a usaully a quiet person, I tend to focus on tasks. This does not mean I do not engage in conversations or discussions. To provide a little context, I am normally focused on tasks when I am asked this question.'
    },
  ]
  const Questions = () => {
    return (
      <div className="w-full text-base lg:text-lg text-slate-300">
        {faqs.map((faq: any, index) => (
          <Accordion type="single" collapsible className="w-full" key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent className="text-base lg:text-lg text-slate-100">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    )
  }
  
  export default Questions