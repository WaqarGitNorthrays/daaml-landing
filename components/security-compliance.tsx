import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Certified security controls and compliance",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest",
  },
  {
    icon: Eye,
    title: "Private Deployment",
    description: "Run entirely in your infrastructure",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description: "Full compliance with data protection regulations",
  },
]

export function SecurityCompliance() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise Security</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Security and compliance built into every layer of the infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-border bg-card/30 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-mono">256-bit</div>
              <div className="text-sm text-muted-foreground">AES Encryption</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-mono">24/7</div>
              <div className="text-sm text-muted-foreground">Security Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-mono">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1 font-mono">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
