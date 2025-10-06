"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechStart Inc.",
    content:
      "This tool cut our system design time from weeks to days. The AI caught database normalization issues and API design flaws we would have missed.",
    avatar: "/professional-asian-woman-tech-executive.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Enterprise Architect, GlobalCorp",
    content:
      "Finally, a tool that understands complex enterprise systems. The automatic ER diagram generation from our database schema saved us weeks of documentation work.",
    avatar: "/professional-hispanic-man-enterprise-architect.jpg",
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer, CloudScale",
    content:
      "The code import feature is incredible. We imported our Kubernetes configs and instantly had visual system architecture documentation for the entire team.",
    avatar: "/professional-indian-woman-devops-engineer.jpg",
  },
  {
    name: "James Wilson",
    role: "Lead Developer, InnovateLabs",
    content:
      "The AI validation caught circular dependencies and potential race conditions in our microservices design. This tool prevents costly architectural mistakes.",
    avatar: "/professional-caucasian-man-software-developer.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Trusted by Architects Worldwide</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            See how teams are transforming their architecture workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/50 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/30 transition-colors" />
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
