"use client"

import { motion } from "framer-motion"
import { Boxes, Database, AlertTriangle, Code, Users, Palette, Lock, Zap } from "lucide-react"

const features = [
  {
    icon: Boxes,
    title: "Modular & Expandable",
    description:
      "Drill down into any component — from high-level architecture to detailed class diagrams and database schemas.",
  },
  {
    icon: Database,
    title: "AI + RAG with Gemini",
    description: "Powered by advanced AI with vector database for context-aware generation of technical diagrams.",
  },
  {
    icon: AlertTriangle,
    title: "Edge Case Handling",
    description:
      "Automatic detection of circular dependencies, N+1 queries, security vulnerabilities, and design anti-patterns.",
  },
  {
    icon: Code,
    title: "Code Import",
    description:
      "Import existing SQL schemas, Terraform, Kubernetes YAML, or code to auto-generate visual system diagrams.",
  },
  {
    icon: Users,
    title: "Collaboration & Versioning",
    description: "Real-time team collaboration with complete version history and change tracking.",
  },
  {
    icon: Palette,
    title: "Multiple Diagram Types",
    description: "Generate UML (class, sequence, activity), ER diagrams, flowcharts, system architecture, and more.",
  },
  {
    icon: Lock,
    title: "Secure OAuth & Encryption",
    description: "Enterprise-grade security with OAuth 2.0 and end-to-end encryption for your sensitive architectures.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate complex system diagrams in seconds, not hours of manual drawing.",
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Powerful Features</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Everything you need to design, validate, and deploy world-class architectures
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
