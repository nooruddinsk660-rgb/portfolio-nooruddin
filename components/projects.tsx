"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and dark theme.",
    image: "/modern-portfolio-website-dark-theme.jpg",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application that fetches data from OpenWeather API with location search and 5-day forecast.",
    image: "/weather-app-interface-dark.jpg",
    tech: ["HTML", "JavaScript", "API"],
    github: "#",
    demo: "#",
  },
  {
    title: "To-Do List App",
    description:
      "Feature-rich task management app with local storage, categories, and priority levels built with React hooks.",
    image: "/todo-list-app-modern-ui.jpg",
    tech: ["React", "Local Storage", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Landing",
    description:
      "Responsive e-commerce landing page with product showcase, shopping cart functionality, and smooth scrolling.",
    image: "/ecommerce-landing-page-modern.jpg",
    tech: ["React", "Tailwind", "Redux"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0a0a0f" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#ff4b2b]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff4b2b] mx-auto mb-4" />
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group bg-[#13131a] rounded-2xl overflow-hidden border border-[#ff4b2b]/20 hover:border-[#ff4b2b]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff4b2b]/20"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#ff4b2b] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#ff4b2b]/10 text-[#ff4b2b] text-sm rounded-full border border-[#ff4b2b]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-[#ff4b2b] text-[#ff4b2b] hover:bg-[#ff4b2b] hover:text-white transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={18} />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    className="flex-1 bg-[#ff4b2b] hover:bg-[#ff6347] text-white transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
