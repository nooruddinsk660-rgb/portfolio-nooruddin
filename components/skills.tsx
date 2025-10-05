"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "HTML5", icon: "🌐", color: "#E34F26" },
  { name: "CSS3", icon: "🎨", color: "#1572B6" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Express.js", icon: "🚂", color: "#000000" },
  { name: "Tailwind CSS", icon: "💨", color: "#06B6D4" },
  { name: "Git", icon: "📦", color: "#F05032" },
  { name: "Java", icon: "☕", color: "#007396" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "C", icon: "©️", color: "#A8B9CC" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #13131a 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#ff4b2b]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff4b2b] mx-auto mb-4" />
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-[#13131a] p-6 rounded-2xl border border-[#ff4b2b]/20 hover:border-[#ff4b2b] transition-all duration-300 cursor-pointer"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff4b2b]/0 to-[#ff4b2b]/0 group-hover:from-[#ff4b2b]/10 group-hover:to-[#ff4b2b]/5 transition-all duration-300" />

              <div className="relative flex flex-col items-center gap-3">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-white font-semibold text-center group-hover:text-[#ff4b2b] transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Hover Glow Ring */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
