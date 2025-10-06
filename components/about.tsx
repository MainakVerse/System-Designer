"use client"

import { motion } from "framer-motion"
import { AlertCircle, Lightbulb, Rocket, Target } from "lucide-react"

const phases = [
  {
    icon: AlertCircle,
    title: "The Pain",
    description:
      "Creating UML diagrams, ER schemas, and system architectures manually is time-consuming and error-prone. Existing tools lack intelligence and context awareness.",
  },
  {
    icon: Lightbulb,
    title: "The Discovery",
    description:
      "We realized that AI combined with human expertise creates the optimal solution — leveraging machine speed with architectural best practices.",
  },
  {
    icon: Rocket,
    title: "The Solution",
    description:
      "A context-aware AI tool that generates UML, ER diagrams, flowcharts, and system architectures through intelligent collaboration and validation.",
  },
  {
    icon: Target,
    title: "The Vision",
    description:
      "Empower engineers and architects to focus on system design decisions, not drawing boxes. Let AI handle diagram generation while you guide the architecture.",
  },
]

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Story</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            From frustration to innovation — how we're transforming architecture design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
