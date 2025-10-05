"use client"

import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToContact = () =>{
    const contactSection = document.getElementById("contact")
    if(contactSection){
      contactSection.scrollIntoView({ behavior: "smooth" , block: "start"})
    }
  }
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #13131a 100%)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl text-[#a0a0a0] font-light">{"Hello 👋, I'm"}</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">Sk Nooruddin</h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-[#ff4b2b]" />
                <p className="text-xl md:text-2xl text-[#a0a0a0]">Aspiring Full Stack Developer</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#a0a0a0] text-lg leading-relaxed max-w-xl"
            >
              Passionate about building scalable web applications using modern technologies. Currently mastering the
              MERN stack and creating practical projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-[#ff4b2b] hover:bg-[#ff6347] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff4b2b]/30">
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#ff4b2b] text-[#ff4b2b] hover:bg-[#ff4b2b] hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto"
              >
                <Mail className="mr-2" size={20} />
                Hire Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glowing Ring Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #ff4b2b, #ff6347, #ff4b2b)",
                  filter: "blur(20px)",
                  opacity: 0.6,
                }}
              />

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#ff4b2b] shadow-2xl shadow-[#ff4b2b]/50">
                <img src="/image-p - Copy.jpeg" alt="Sk Nooruddin" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
