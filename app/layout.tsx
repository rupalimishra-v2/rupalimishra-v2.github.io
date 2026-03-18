import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rupali Mishra | AI Engineer & Full Stack Developer',
  description: 'Software Engineer specializing in RAGs, AI Agents, and Agentic AI Development. Building intelligent systems with Python, AWS, PostgreSQL, and modern web technologies.',
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
  },
  keywords: [
    'AI Engineer',
    'RAG',
    'Retrieval-Augmented Generation',
    'AI Agents',
    'Agentic AI',
    'Software Engineer',
    'Python Developer',
    'AWS',
    'PostgreSQL',
    'Full Stack Developer',
    'Machine Learning',
    'Deep Learning',
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.website,
    title: 'Rupali Mishra | AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems with RAGs & AI Agents. Specializing in Agentic AI Development.',
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rupali Mishra | AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems with RAGs & AI Agents',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
