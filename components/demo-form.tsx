"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Extend global window to include plausible
declare global {
  interface Window {
    plausible?: (eventName: string, options?: Record<string, unknown>) => void
  }
}

// Debug helper to confirm events fire locally
function setupPlausibleDebug() {
  if (typeof window === "undefined") return
  if (!window.plausible) return

  const original = window.plausible

  window.plausible = function (eventName: string, options?: Record<string, unknown>) {
    console.log("%c[Plausible Debug]", "color:limegreen;font-weight:bold;", eventName, options || {})
    return original.call(window, eventName, options)
  }

  // Optional on-screen badge
  const badge = document.createElement("div")
  badge.textContent = "🟢 Plausible Debug ON"
  Object.assign(badge.style, {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    background: "rgba(0,0,0,0.6)",
    color: "white",
    padding: "6px 10px",
    borderRadius: "8px",
    fontSize: "12px",
    zIndex: "9999",
    fontFamily: "monospace",
  })
  document.body.appendChild(badge)
}

export function DemoForm() {
  const [showTally, setShowTally] = useState(false)

  useEffect(() => {
    setupPlausibleDebug()

    function handleTallyMessage(e: MessageEvent) {
      console.log("📩 Received postMessage:", e.data)

      const d = e.data || {}

      // Covers all known Tally formats
      const isSubmit =
        d?.type === "TALLY_FORM_SUBMIT" ||
        d?.event === "TALLY_FORM_SUBMIT" ||
        d?.eventName === "FORM_SUBMIT" ||
        d?.payload?.eventName === "FORM_SUBMIT"

      if (isSubmit) {
        console.log("🚀 Tally form submitted detected!")
        if (window.plausible) {
          window.plausible("demo_request")
        } else {
          console.warn("⚠️ Plausible not loaded yet.")
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
      {/* Tally embed script */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
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

              <div className="text-center pt-4">
                <Button onClick={openTallyForm} size="lg" variant="outline" className="w-full bg-transparent">
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
