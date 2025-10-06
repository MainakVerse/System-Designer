"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate are the AI-generated diagrams?",
    answer:
      "Our AI is trained on thousands of production system architectures and software engineering best practices. It generates highly accurate UML diagrams, ER schemas, and system architectures that you can refine through iterative cycles. The built-in validation catches common design flaws and anti-patterns.",
  },
  {
    question: "Can I handle large, complex enterprise systems?",
    answer:
      "Our modular design allows you to expand any subsystem to infinite depth. You can start with a high-level overview and drill down into specific microservices, databases, or infrastructure components as needed.",
  },
  {
    question: "Is my architecture data secure?",
    answer:
      "Yes. We use enterprise-grade security with OAuth 2.0 authentication and end-to-end encryption. Your architecture diagrams and data are stored securely and never shared with third parties. We're SOC 2 compliant and GDPR ready.",
  },
  {
    question: "Can I import existing infrastructure code?",
    answer:
      "Yes! You can import Terraform, CloudFormation, YAML, and other infrastructure-as-code formats. Our AI will automatically generate visual diagrams from your existing code, making documentation effortless.",
  },
  {
    question: "What types of diagrams can I create?",
    answer:
      "You can create UML diagrams (class, sequence, activity, component), ER diagrams, flowcharts, system architecture diagrams, microservices architectures, database schemas, API designs, and more. The tool adapts to your specific needs.",
  },
  
]

export default function FAQ() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Everything you need to know about our AI architecture tool
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
