import { Hero } from "@/components/hero"
import { Capabilities } from "@/components/capabilities"
import { DeploymentOptions } from "@/components/deployment-options"
import { CaseSnapshot } from "@/components/case-snapshot"
import { DemoForm } from "@/components/demo-form"
import { TechStack } from "@/components/tech-stack"
import { SecurityCompliance } from "@/components/security-compliance"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Capabilities />
      <TechStack />
      <DeploymentOptions />
      <SecurityCompliance />
      <CaseSnapshot />
      <Testimonials />
      <FAQ />
      <DemoForm />
      <Footer />
    </main>
  )
}
