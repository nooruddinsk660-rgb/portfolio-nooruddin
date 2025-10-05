"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, TrendingUp, Award } from "lucide-react"

const stats = [
  { icon: Code2, label: "Personal Projects", value: 10, suffix: "+" },
  { icon: TrendingUp, label: "Learning Progress", value: 95, suffix: "%" },
  { icon: Award, label: "Training Certifications", value: 2, suffix: "" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#ff4b2b]">
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#0a0a0f" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#ff4b2b]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff4b2b] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              I am an enthusiastic developer passionate about building scalable web applications using modern
              technologies. I'm currently learning MERN stack and focus on creating practical projects that reflect
              real-world development.
            </p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              My journey in web development started with a curiosity to understand how websites work, and it has evolved
              into a passion for creating seamless user experiences and robust backend systems.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-[#13131a] p-6 rounded-2xl border border-[#ff4b2b]/20 hover:border-[#ff4b2b]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff4b2b]/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#ff4b2b]/10 rounded-xl">
                    <stat.icon className="text-[#ff4b2b]" size={32} />
                  </div>
                  <div>
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <p className="text-[#a0a0a0] text-sm mt-1">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
