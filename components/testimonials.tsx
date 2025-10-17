import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "DAAML's infrastructure handles our 10M+ daily requests without breaking a sweat. The anti-detection is unmatched.",
    author: "Sarah Chen",
    role: "CTO, DataFlow Inc",
    company: "Series B SaaS",
  },
  {
    quote:
      "We migrated from building in-house to DAAML and cut our infrastructure costs by 60% while improving reliability.",
    author: "Marcus Rodriguez",
    role: "VP Engineering",
    company: "Fortune 500",
  },
  {
    quote: "The managed deployment option let us scale from 0 to production in days, not months. Game changer.",
    author: "Alex Kim",
    role: "Founder",
    company: "Growth Stage Startup",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-32 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Power Users</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Teams running serious automation infrastructure choose DAAML.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
