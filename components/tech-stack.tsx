import { Card } from "@/components/ui/card"
import { Code2, Server, Shield, Workflow } from "lucide-react"

const techCategories = [
  {
    icon: Code2,
    title: "Browser Automation",
    technologies: ["Playwright", "Puppeteer", "Selenium Grid", "Custom Chrome"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    technologies: ["Kubernetes", "Docker", "Redis", "PostgreSQL"],
  },
  {
    icon: Shield,
    title: "Security & Proxies",
    technologies: ["Residential Proxies", "mTLS", "VPN Mesh", "Anti-Detection"],
  },
  {
    icon: Workflow,
    title: "Orchestration",
    technologies: ["Temporal", "RabbitMQ", "Apache Kafka", "Custom Scheduler"],
  },
]

export function TechStack() {
  return (
    <section className="relative py-32 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Battle-Tested Technology</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on proven infrastructure that scales to billions of requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.technologies.map((tech) => (
                  <li key={tech} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {tech}
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
