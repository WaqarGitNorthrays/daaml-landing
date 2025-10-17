"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Hero() {
  const [stats, setStats] = useState({ requests: 0, uptime: 0, users: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        requests: prev.requests < 50 ? prev.requests + 1 : 50,
        uptime: prev.uptime < 99.99 ? prev.uptime + 0.01 : 99.99,
        users: prev.users < 500 ? prev.users + 5 : 500,
      }))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">Enterprise Infrastructure</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          Private Automation
          <br />
          Infrastructure for
          <br />
          <span className="text-primary">Power Users</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          We build browser + Android systems for scraping, enrichment & campaigns — serious infra only.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-base px-8">
            Book Private Demo
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            View Documentation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">{stats.requests}B+</div>
            <div className="text-sm text-muted-foreground">Requests/Month</div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">{stats.uptime.toFixed(2)}%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">{stats.users}K+</div>
            <div className="text-sm text-muted-foreground">Active Sessions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
