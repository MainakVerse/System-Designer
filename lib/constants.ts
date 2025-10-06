export const SITE_CONFIG = {
  name: "AI Architecture Diagram Tool",
  description: "Transform ideas into production-ready UML diagrams, ER schemas, and system architectures with AI",
  url: "https://ai-architecture-tool.com",
  ogImage: "https://ai-architecture-tool.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/ai-arch-tool",
    github: "https://github.com/ai-arch-tool",
    linkedin: "https://linkedin.com/company/ai-arch-tool",
  },
}

export const DIAGRAM_TYPES = [
  "UML Class Diagrams",
  "ER Diagrams",
  "Sequence Diagrams",
  "Flowcharts",
  "System Architecture",
  "Component Diagrams",
  "Activity Diagrams",
  "State Diagrams",
] as const

export const EXPORT_FORMATS = ["PNG", "SVG", "PDF", "PlantUML", "Mermaid", "SQL DDL", "Terraform", "JSON"] as const
