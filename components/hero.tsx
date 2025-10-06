"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [progress, setProgress] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const scrollAnimationRef = useRef<number | null>(null)

  const handleKnowMore = () => {
    if (isAutoScrolling) return
    setIsAutoScrolling(true)
    setProgress(0)

    const startY = window.scrollY
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const startTime = performance.now()

    const duration = 70000 // total scroll time in ms (~20s)
    const distance = totalHeight - startY
    const speed = distance / duration // pixels per ms (uniform speed)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const newY = startY + speed * elapsed
      const progressRatio = Math.min(elapsed / duration, 1)

      window.scrollTo(0, newY)
      setProgress(progressRatio * 100)

      if (elapsed < duration && newY < totalHeight) {
        scrollAnimationRef.current = requestAnimationFrame(animate)
      } else {
        setIsAutoScrolling(false)
      }
    }

    scrollAnimationRef.current = requestAnimationFrame(animate)
  }

  // Stop auto-scroll if user scrolls manually
  useEffect(() => {
    const stopScroll = () => {
      if (isAutoScrolling && scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current)
        setIsAutoScrolling(false)
      }
    }

    window.addEventListener("wheel", stopScroll, { passive: true })
    window.addEventListener("touchmove", stopScroll, { passive: true })
    return () => {
      window.removeEventListener("wheel", stopScroll)
      window.removeEventListener("touchmove", stopScroll)
    }
  }, [isAutoScrolling])

  const handleGenerate = () => {
    if (window.innerWidth < 1024) {
      alert(
        "Please switch to a laptop or desktop screen for the best experience.\nMinimum recommended resolution: 1024 × 768 pixels."
      )
    } else {
      console.log("Generate Your First Diagram clicked — screen OK.")
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-primary/10 px-6 py-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Architecture Design</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Transform Ideas with System Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          From rough concepts to production-ready UML, ER diagrams, and system architectures in minutes — powered by AI,
          guided by you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 group"
            onClick={handleKnowMore}
            disabled={isAutoScrolling}
          >
            Quick Tour
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent"
            onClick={handleGenerate}
          >
            Generate Your First Diagram
          </Button>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <img
                src="/hero.png"
                alt="AI System Architecture Diagram Demo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      {isAutoScrolling && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
          className="fixed top-0 left-0 h-1 bg-primary z-50"
        />
      )}
    </section>
  )
}
