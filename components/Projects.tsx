'use client'

import { projects } from '@/lib/data'
import { useInView } from '@/lib/hooks/useInView'

export default function Projects() {
  const { ref: titleRef, isInView: titleInView } = useInView()

  return (
    <section id="projects" className="section-container">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-dark-400 text-lg">Some of my notable work and open-source contributions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`card-gradient rounded-lg overflow-hidden group transition-all duration-700 hover:scale-[1.02] ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-30">
            {project.title.includes('Telegram') && '📱'}
            {project.title.includes('Coding') && '💻'}
            {project.title.includes('PostgreSQL') && '🗄️'}
            {project.title.includes('Web Scraper') && '🌐'}
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-dark-300 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-dark-800 text-accent-400 border border-accent-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">View Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-400 hover:text-secondary-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
