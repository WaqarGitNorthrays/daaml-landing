export function CaseSnapshot() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
            <span className="text-sm text-muted-foreground font-mono">Case Study</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">Proven at Scale</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,000+</div>
              <div className="text-muted-foreground">Concurrent Workers</div>
            </div>

            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>

            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Daily Operations</div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Deployed for enterprise clients processing millions of operations daily with industry-leading reliability
            and performance.
          </p>
        </div>
      </div>
    </section>
  )
}
