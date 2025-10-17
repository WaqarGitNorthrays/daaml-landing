import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const options = [
  {
    title: "Your Setup",
    description: "Deploy on your infrastructure",
    features: [
      "Full control over infrastructure",
      "Custom security policies",
      "Bring your own cloud",
      "Self-managed scaling",
      "Direct database access",
    ],
  },
  {
    title: "Managed by DAAML",
    description: "We handle everything",
    features: [
      "99.9% uptime SLA",
      "24/7 monitoring & support",
      "Auto-scaling infrastructure",
      "Security & compliance",
      "Managed updates",
    ],
    highlighted: true,
  },
]

export function DeploymentOptions() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Deployment Options</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the deployment model that fits your security and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option) => (
            <Card
              key={option.title}
              className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 ${
                option.highlighted ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {option.highlighted && (
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
              <p className="text-muted-foreground mb-6">{option.description}</p>

              <ul className="space-y-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
