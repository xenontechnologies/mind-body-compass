import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Link } from "@tanstack/react-router";
import { Section } from "./section";

const faqs = [
  {
    q: "Is Plight a replacement for therapy?",
    a: "No. Mind Support offers supportive conversation, coping strategies, and check-ins — not therapy, diagnosis, or a treatment plan. It is designed to help you cope in the moment and to connect you with a licensed professional when that's what you need.",
  },
  {
    q: "How does escalation to a real professional work?",
    a: "As you chat, Mind Support quietly assesses severity. If it detects signs of crisis or severe distress, an escalation card appears inline with crisis hotline numbers and a button to request a licensed psychiatrist from our network. You can keep chatting with the assistant while you wait, and you decide what gets shared.",
  },
  {
    q: "What does the 5-point severity scale actually mean?",
    a: "Health Guide grades an assessment from 1 (mild, self-care) to 5 (seek emergency care now), with a plain-language explanation of why that level was assigned and a single recommended next step. It is guidance toward the right level of care — never a diagnosis.",
  },
  {
    q: "How is my data stored and secured?",
    a: "Conversations are encrypted in transit and at rest, access is scoped to your account, and we never sell data or share it with advertisers. You can delete any conversation permanently, and deletion removes it from history and insights.",
  },
  {
    q: "Where can I find Kenya emergency hotlines?",
    a: "Use the Kenya crisis hotlines page for emergency numbers, hospital guidance, and immediate next steps if someone is at risk.",
  },
  {
    q: "What does it cost?",
    a: "The core assistants and all crisis resources are free, forever. Paid plans add journal history, personalized check-ins, progress insights, and — on Care+ — priority escalation plus clinician session time.",
  },
  {
    q: "Is it available at night and on weekends?",
    a: "The assistants are available 24/7. Licensed professional availability depends on your region and time of day; if no clinician can respond immediately, we show verified crisis lines that can.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Contact your local emergency number or a crisis hotline immediately. Plight is not an emergency service and cannot dispatch help.",
  },
];

export function Faq() {
  return (
    <Section id="faq" label="FAQ" title="Questions we get asked most">
      <Accordion
        type="single"
        collapsible
        className="overflow-hidden rounded-lg border border-border bg-card"
      >
        {faqs.map((item, i) => (
          <AccordionItem
            key={item.q}
            value={`item-${i}`}
            className={i === faqs.length - 1 ? "border-b-0" : "border-border"}
          >
            <AccordionTrigger className="px-5 py-4 text-left text-xs font-medium text-foreground hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-xs leading-relaxed text-muted-foreground">
              {item.q === "Where can I find Kenya emergency hotlines?" ? (
                <span>
                  {item.a} <Link to="/kenya-hotlines" className="text-foreground underline underline-offset-2">
                    Open the Kenya hotline page
                  </Link>
                  .
                </span>
              ) : (
                item.a
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
