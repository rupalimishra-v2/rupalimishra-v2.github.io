'use client'

import { skills } from '@/lib/data'
import { useInView } from '@/lib/hooks/useInView'

const skillCategories = [
  { title: 'Languages', items: skills.languages, color: 'primary' },
  { title: 'Frameworks', items: skills.frameworks, color: 'secondary' },
  { title: 'Cloud & DevOps', items: skills.cloud, color: 'accent' },
  { title: 'Databases', items: skills.databases, color: 'primary' },
  { title: 'AI/ML', items: skills.aiml, color: 'secondary' },
  { title: 'Tools & Other', items: skills.other, color: 'accent' },
]

export default function Skills() {
  const { ref: titleRef, isInView: titleInView } = useInView()

  return (
    <section id="skills" className="section-container bg-dark-900/50">
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-700 ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        <p className="text-dark-400 text-lg">Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}

function SkillCategory({
  category,
  index,
}: {
  category: typeof skillCategories[0]
  index: number
}) {
  const { ref, isInView } = useInView()

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary-500/30 text-primary-400 hover:border-primary-500 hover:shadow-primary-500/20'
      case 'secondary':
        return 'border-secondary-500/30 text-secondary-400 hover:border-secondary-500 hover:shadow-secondary-500/20'
      case 'accent':
        return 'border-accent-500/30 text-accent-400 hover:border-accent-500 hover:shadow-accent-500/20'
      default:
        return 'border-primary-500/30 text-primary-400'
    }
  }

  return (
    <div
      ref={ref}
      className={`card-gradient rounded-lg p-6 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 text-sm rounded-full bg-dark-800 border transition-all duration-300 hover:scale-105 hover:shadow-lg ${getColorClasses(
              category.color
            )}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
