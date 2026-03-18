'use client'

import { experiences, education } from '@/lib/data'
import { useInView } from '@/lib/hooks/useInView'

export default function Experience() {
  const { ref: titleRef, isInView: titleInView } = useInView()

  return (
    <section id="experience" className="section-container bg-dark-900/50">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Experience & Education</span>
        </h2>
        <p className="text-dark-400 text-lg">My professional journey and academic background</p>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Professional Experience
        </h3>
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Education
        </h3>
        <div className="space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <EducationItem key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8 transition-all duration-700 delay-${index * 100} ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      {/* Timeline line (mobile) */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 md:hidden"></div>

      {/* Timeline dot (mobile) */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-500 transform -translate-x-[5px] md:hidden"></div>

      {/* Period (desktop) */}
      <div className="md:col-span-3 md:text-right mb-2 md:mb-0">
        <div className="text-dark-400 font-medium">{experience.period}</div>
        <div className="text-dark-500 text-sm">{experience.type}</div>
        {experience.current && (
          <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            Current
          </span>
        )}
      </div>

      {/* Timeline line (desktop) */}
      <div className="hidden md:flex md:col-span-1 justify-center relative">
        <div className="w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 absolute top-0 bottom-0"></div>
        <div className="w-4 h-4 rounded-full bg-primary-500 absolute top-2 transform -translate-x-[7px]"></div>
      </div>

      {/* Content */}
      <div className="md:col-span-8 card-gradient rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{experience.role}</h3>
            <h4 className="text-lg text-primary-400 font-semibold">{experience.company}</h4>
            <p className="text-dark-500 text-sm mt-1">{experience.location}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li key={i} className="text-dark-300 flex items-start">
              <span className="text-primary-500 mr-2 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-dark-800 text-primary-400 border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function EducationItem({ education: edu, index }: { education: typeof education[0], index: number }) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8 transition-all duration-700 delay-${index * 100} ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      {/* Timeline line (mobile) */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 md:hidden"></div>

      {/* Timeline dot (mobile) */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-500 transform -translate-x-[5px] md:hidden"></div>

      {/* Period (desktop) */}
      <div className="md:col-span-3 md:text-right mb-2 md:mb-0">
        <div className="text-dark-400 font-medium">{edu.period}</div>
        {edu.gpa && (
          <div className="text-primary-400 font-semibold mt-1">{edu.gpa}</div>
        )}
        {edu.current && (
          <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            Current
          </span>
        )}
      </div>

      {/* Timeline line (desktop) */}
      <div className="hidden md:flex md:col-span-1 justify-center relative">
        <div className="w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 absolute top-0 bottom-0"></div>
        <div className="w-4 h-4 rounded-full bg-primary-500 absolute top-2 transform -translate-x-[7px]"></div>
      </div>

      {/* Content */}
      <div className="md:col-span-8 card-gradient rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.degree}</h3>
        <h4 className="text-lg text-primary-400 font-semibold mb-2">{edu.institution}</h4>
        <p className="text-dark-500 text-sm mb-3">{edu.location}</p>

        <p className="text-dark-300 mb-3">{edu.description}</p>

        {edu.achievements && edu.achievements.length > 0 && (
          <ul className="space-y-1">
            {edu.achievements.map((achievement, i) => (
              <li key={i} className="text-dark-400 flex items-start text-sm">
                <span className="text-primary-500 mr-2 mt-1">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
