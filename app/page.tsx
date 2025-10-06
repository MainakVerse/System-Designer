import Hero from "@/components/hero"
import About from "@/components/about"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
