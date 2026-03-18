'use client'

import { personalInfo } from '@/lib/data'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-50"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 section-container text-center">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark-200 mb-4 animate-fade-in-up animation-delay-200">
            {personalInfo.tagline}
          </h2>

          <p className="text-lg sm:text-xl text-dark-400 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
            {personalInfo.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <a
            href="/resume/Rupali_Resume.pdf?v=2026-03-18"
            download
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
          >
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg
            className="w-6 h-6 text-dark-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
