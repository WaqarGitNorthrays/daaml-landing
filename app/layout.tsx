import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "DAAML - Private Automation Infrastructure",
  description:
    "Enterprise-grade browser and Android automation for power users — build scraping, enrichment, and campaign systems privately.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Plausible Analytics */}
        <Script
          defer
          data-domain="daaml-landing.vercel.app"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>

        {/* ✅ Vercel Analytics (optional, keep both if you want) */}
        <Analytics />
      </body>
    </html>
  )
}
