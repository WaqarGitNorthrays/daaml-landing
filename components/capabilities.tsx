"use client"

import { Card } from "@/components/ui/card"
import { Database, Zap, Target, BarChart3 } from "lucide-react"
import { useState } from "react"

const capabilities = [
  {
    icon: Database,
    title: "Scraping",
    description: "High-performance browser automation with anti-detection. Scale to thousands of concurrent sessions.",
    features: ["Residential proxies", "CAPTCHA solving", "Session management", "Rate limiting"],
  },
  {
    icon: Zap,
    title: "Enrichment",
    description: "Real-time data enrichment pipelines. Transform raw data into actionable intelligence.",
    features: ["API integrations", "Data validation", "Custom transformations", "Real-time processing"],
  },
  {
    icon: Target,
    title: "Campaigns",
    description: "Orchestrate complex multi-step campaigns across platforms. Built for scale and reliability.",
    features: ["Multi-platform support", "Workflow automation", "A/B testing", "Performance tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Deep insights into performance metrics. Monitor, optimize, and scale with confidence.",
    features: ["Real-time dashboards", "Custom reports", "Anomaly detection", "Cost optimization"],
  },
]

export function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for teams that need serious infrastructure, not toy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={capability.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <capability.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{capability.description}</p>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 pt-4 border-t border-border">
                  {capability.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
