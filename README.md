# AI Architecture Diagram Tool

Transform ideas into production-ready UML diagrams, ER schemas, and system architectures with AI.

## Features

- 🤖 **AI-Powered Generation** - Generate UML, ER diagrams, and system architectures from text descriptions
- 🔄 **Iterative Refinement** - Refine diagrams through intelligent context cycles
- 📦 **Modular Design** - Expand any component into detailed subsystems
- ✅ **AI Validation** - Catch design flaws, circular dependencies, and anti-patterns
- 👥 **Team Collaboration** - Real-time collaboration with version control
- 📤 **Multiple Export Formats** - Export to PNG, SVG, PDF, PlantUML, Mermaid, SQL DDL, and more
- 🔒 **Enterprise Security** - OAuth 2.0 and end-to-end encryption

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd ai-architecture-diagram-tool
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and theme tokens
├── components/
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About/Story section
│   ├── how-it-works.tsx    # How It Works section
│   ├── features.tsx        # Features grid
│   ├── testimonials.tsx    # Customer testimonials
│   ├── faq.tsx             # FAQ accordion
│   ├── cta.tsx             # Call-to-action section
│   ├── footer.tsx          # Footer with links
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notifications hook
└── public/                 # Static assets and images
\`\`\`

## Color Theme

The project uses a violet and white color scheme:

- **Primary**: Medium violet (#8B5CF6 range)
- **Secondary**: Light violet
- **Accent**: Bright violet
- **Background**: Pure white
- **Foreground**: Deep violet

All colors are defined using OKLCH color space for better perceptual uniformity.

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript type checking

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

All rights reserved © 2025 AI Architecture Diagram Tool
