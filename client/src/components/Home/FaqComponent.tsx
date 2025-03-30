import { faqs } from "@/constants/faq";
import { width } from "@/constants/styles";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "../common/Heading";

export default function FaqComponent() {
  return (
    <div className={`${width} flex flex-col gap-2 items-start`}>
      <Heading heading="Frequently Asked Questions" />
      {faqs.map((el, i) => {
        return (
          <Accordion
            className={`w-full text-gray-700 dark:text-gray-500 text-xl border-[1px] border-slate-500 dark:border-slate-900 p-2 rounded-lg cursor-pointer 
              shadow-md shadow-slate-400/[.3] dark:shadow-slate-900/[.3] mb-2 bg-orange-500/[.03]`}
            key={i}
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>{el.question}</AccordionTrigger>
              <AccordionContent>{el.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
