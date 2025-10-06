import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "System Designer AI | UML, ER Diagrams & System Design",
  description:
    "Transform ideas into production-ready UML diagrams, ER schemas, and system architectures with AI. Generate, validate, and collaborate on technical diagrams in minutes.",
  keywords: [
    "UML diagrams",
    "ER diagrams",
    "system architecture",
    "AI diagram generator",
    "technical documentation",
    "database schema",
    "microservices architecture",
  ],
  authors: [{ name: "AI Architecture Diagram Tool" }],
  generator: "v0.app",
  openGraph: {
    title: "System Designer AI",
    description: "Transform ideas into production-ready system diagrams with AI",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
