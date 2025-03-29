import { faqs } from "@/constants/faq";
import { width } from "@/constants/styles";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqComponent() {
  return (
    <div className={`${width} flex flex-col gap-10`}>
      <h2 className="text-base lg:text-xl font-bold tracking-[1px] text-orange-500 text-center">
        Frequently Asked Questions
      </h2>
      {faqs.map((el, i) => {
        return (
          <Accordion
            className={`${width} text-gray-50 text-xl border-[1px] border-orange-500/[.3] p-3 rounded-lg cursor-pointer shadow-lg shadow-orange-500/[.2] bg-gradient-to-br to-orange-500/[.3] from-slate-600`}
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
