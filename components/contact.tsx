"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nooruddin@example.com", label: "Email" },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage("")

    try {
      const serviceId = "service_vg9mguq"
      const templateId = "template_rmn0ng5"
      const publicKey = "APe1Nthsm9CfDzDZ1"

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setStatusMessage("Message sent successfully! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatusMessage("Failed to send message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
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
            {"Let's"} <span className="text-[#ff4b2b]">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff4b2b] mx-auto mb-4" />
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#13131a] border border-[#ff4b2b]/20 rounded-xl text-white focus:border-[#ff4b2b] focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#13131a] border border-[#ff4b2b]/20 rounded-xl text-white focus:border-[#ff4b2b] focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#13131a] border border-[#ff4b2b]/20 rounded-xl text-white focus:border-[#ff4b2b] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff4b2b] hover:bg-[#ff6347] text-white py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff4b2b]/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </Button>

              {statusMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-xl ${
                    statusMessage.includes("success")
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {statusMessage}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#13131a] p-8 rounded-2xl border border-[#ff4b2b]/20">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-[#0a0a0f] rounded-xl border border-[#ff4b2b]/20 hover:border-[#ff4b2b] transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#ff4b2b]/10 rounded-lg group-hover:bg-[#ff4b2b]/20 transition-colors duration-300">
                      <social.icon className="text-[#ff4b2b]" size={24} />
                    </div>
                    <span className="text-white font-medium group-hover:text-[#ff4b2b] transition-colors duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-[#13131a] p-8 rounded-2xl border border-[#ff4b2b]/20">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3 text-[#a0a0a0]">
                <p>📍 Location: Available for Remote Work</p>
                <p>💼 Status: Open to Opportunities</p>
                <p>⚡ Response Time: Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

