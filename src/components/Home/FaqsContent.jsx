import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqsContent({ questions }) {
  return (
    <Accordion type="single" collapsible className="p-4 w-full lg:w-2/5">
      {questions.map((q, i) => (
        <AccordionItem key={i} value={`item-${i + 1}`}>
          <AccordionTrigger className="mt-4">{q.question}</AccordionTrigger>
          <AccordionContent>{q.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
