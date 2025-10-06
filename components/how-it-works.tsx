"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import {
  Sparkles,
  RefreshCw,
  Boxes,
  Shield,
  Users,
  Download,
  Brain,
} from "lucide-react"

const steps = [
  {
    icon: Sparkles,
    title: "Seed Your Idea",
    description:
      "Start with a system requirement or concept. Our AI generates comprehensive UML diagrams, ER schemas, or architecture blueprints instantly.",
    image: "/img1.png",
  },
  {
    icon: RefreshCw,
    title: "Refine Through Context",
    description:
      "Iterate with AI through intelligent context cycles. Add entities, relationships, constraints, and design patterns to perfect your diagrams.",
    image: "/img2.png",
  },
  {
    icon: Boxes,
    title: "Modular Design",
    description:
      "Expand any component into detailed subsystems. Drill down into microservices, database schemas, API layers, or any architectural component.",
    image: "/img3.png",
  },
  {
    icon: Shield,
    title: "AI Validation & Referee",
    description:
      "Built-in validation catches design flaws, circular dependencies, security issues, and architectural anti-patterns before implementation.",
    image: "/img4.png",
  },
  {
    icon: Users,
    title: "Collaborate & Version",
    description:
      "Work with your team in real-time. Track changes, compare versions, and maintain a complete history of your architecture evolution.",
    image: "/img5.png",
  },
  {
    icon: Download,
    title: "Export & Polish",
    description:
      "Export to multiple formats: PNG, SVG, PDF, PlantUML, Mermaid, or code (SQL DDL, Terraform). Integrate seamlessly with your workflow.",
    image: "/img6.png",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description:
      "Our AI learns from your patterns and preferences, becoming smarter with every diagram you create.",
    image: "/img7.png",
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            A seamless journey from concept to production-ready architecture
          </p>
        </motion.div>

        {/* Central timeline line */}
        <div className="absolute left-1/2 top-[13rem] bottom-0 w-[3px] bg-border/50 transform -translate-x-1/2 pointer-events-none">
          {/* The line fill animation */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-full bg-primary origin-top rounded-full"
          />
        </div>

        {/* Steps */}
        <div className="space-y-28 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className={`relative flex flex-col ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10`}
              >
                {/* Timeline node (dot) */}
                <div className="hidden md:block absolute top-[2.75rem] left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-5 h-5 bg-background border-4 border-primary rounded-full shadow-sm" />
                </div>

                {/* Text block */}
                <div
                  className={`
                    flex-1 space-y-4 relative z-20 md:z-auto
                    md:bg-transparent
                    bg-background/90 backdrop-blur-sm rounded-2xl p-5 md:p-0
                    shadow-sm md:shadow-none
                  `}
                >
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image block */}
                <div className="flex-1 relative z-10">
                  <div className="relative rounded-xl border border-border bg-card p-4 shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
