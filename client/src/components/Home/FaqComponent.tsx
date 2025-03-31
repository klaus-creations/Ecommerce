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
    <div
      className={`${width} flex flex-col gap-4 items-start bg-slate-300/[.2] dark:bg-slate-900/[.2] p-2 lg:p-4`}
    >
      <Heading heading="Frequently Asked Questions" />
      {faqs.map((el, i) => {
        return (
          <Accordion
            className={`w-full text-gray-50 text-xl  p-2 rounded-md cursor-pointer mb-2 bg-secondary`}
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
