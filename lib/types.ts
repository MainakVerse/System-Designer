import type React from "react"
export interface DiagramType {
  id: string
  name: string
  description: string
  icon: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Step {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  image?: string
}
