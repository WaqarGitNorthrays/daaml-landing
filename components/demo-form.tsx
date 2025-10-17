"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DemoForm() {
  const [showTally, setShowTally] = useState(false)

  // Handle Plausible event on Tally form submission
  useEffect(() => {
    function handleTallyMessage(e: MessageEvent) {
      if (e.data?.type === "TALLY_FORM_SUBMIT") {
        console.log("Tally form submitted!") // optional debug
        if (typeof window !== "undefined" && window.plausible) {
          window.plausible("demo_request") // Custom Plausible event
        }
      }
    }

    window.addEventListener("message", handleTallyMessage)
    return () => window.removeEventListener("message", handleTallyMessage)
  }, [])

  const openTallyForm = () => {
    if (typeof window !== "undefined" && (window as any).Tally) {
      ;(window as any).Tally.openPopup("nWvj4Q", {
        layout: "modal",
        width: 600,
        autoClose: 3000,
      })
    }
  }

  return (
    <section className="relative py-32 border-t border-border">
      {/* Load Tally embed script */}
      <script
        async
        src="https://tally.so/widgets/embed.js"
        onLoad={() => setShowTally(true)}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Book Private Demo</h2>
            <p className="text-muted-foreground text-lg">
              Qualified leads only. Tell us about your infrastructure needs.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="space-y-6">
              {/* Inline Tally Embed */}
              <iframe
                data-tally-src="https://tally.so/embed/nWvj4Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="DAAML Demo Request"
                className="rounded-lg"
              />

              {/* Popup Option */}
              <div className="text-center pt-4">
                <Button
                  onClick={openTallyForm}
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  Open in Popup
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                We'll review your request and reach out within 24 hours.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
