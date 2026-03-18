import { personalInfo } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-dark-400 text-sm text-center md:text-left">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>

          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-500 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-500 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-primary-500 transition-colors duration-200"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
