"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What makes DAAML different from other automation tools?",
    answer:
      "DAAML is built for enterprise scale with anti-detection, residential proxies, and infrastructure that handles billions of requests. We're not a toy solution—we're serious infrastructure for serious teams.",
  },
  {
    question: "Can I run DAAML in my own infrastructure?",
    answer:
      "Yes. We offer both managed deployment and self-hosted options. You can run DAAML entirely in your AWS, GCP, or on-premise infrastructure with full control.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We work with teams spending $10K+/month on automation infrastructure. Pricing is based on your scale, deployment model, and support needs. Book a demo to discuss your specific requirements.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We offer qualified prospects a 30-day pilot program to validate DAAML against your specific use cases. This includes dedicated engineering support and custom configuration.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Enterprise customers get dedicated Slack channels, 24/7 on-call engineering support, and quarterly business reviews. We're invested in your success.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Managed deployments can be live in 48 hours. Self-hosted deployments typically take 1-2 weeks depending on your infrastructure complexity and security requirements.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about DAAML infrastructure.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-secondary/20 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
