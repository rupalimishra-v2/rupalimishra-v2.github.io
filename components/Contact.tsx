'use client'

import { personalInfo, socialLinks } from '@/lib/data'
import { useInView } from '@/lib/hooks/useInView'
import { useState } from 'react'

export default function Contact() {
  const { ref: titleRef, isInView: titleInView } = useInView()
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="section-container">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-dark-400 text-lg max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions. Feel free to reach out!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="card-gradient rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-200 break-all"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="mt-2 text-sm text-dark-500 hover:text-primary-500 transition-colors duration-200"
                >
                  {copied === 'email' ? '✓ Copied!' : 'Copy email'}
                </button>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="card-gradient rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="mt-2 text-sm text-dark-500 hover:text-primary-500 transition-colors duration-200"
                >
                  {copied === 'phone' ? '✓ Copied!' : 'Copy number'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20 group"
              >
                {social.icon === 'github' && (
                  <svg className="w-6 h-6 text-dark-400 group-hover:text-primary-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-6 h-6 text-dark-400 group-hover:text-primary-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social.icon === 'medium' && (
                  <svg className="w-6 h-6 text-dark-400 group-hover:text-primary-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                )}
                {social.icon === 'email' && (
                  <svg className="w-6 h-6 text-dark-400 group-hover:text-primary-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
