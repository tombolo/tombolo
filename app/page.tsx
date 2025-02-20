"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Skills data
  const skills = [
    { name: "JavaScript", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "Java", percentage: 80 },
    { name: "C++", percentage: 75 },
    { name: "TypeScript", percentage: 90 },
    { name: "Go", percentage: 70 },
    { name: "Ruby", percentage: 65 },
    { name: "PHP", percentage: 60 },
    { name: "Swift", percentage: 55 },
    { name: "Kotlin", percentage: 50 },
  ];

  // Projects data
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with Next.js and Tailwind CSS.",
      image: "/project1.jpg",
      link: "#",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with React and Node.js backend.",
      image: "/project2.jpg",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A portfolio website showcasing UI/UX design skills.",
      image: "/project3.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#eaeaea] dark:from-[#1a1a1a] dark:to-[#0d0d0d] font-[family-name:var(--font-geist-sans)]">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white opacity-80 transition-all shadow-lg md:-mt-5">
        <div className="container mx-auto p-1 flex justify-between items-center -mb-4">
          <Image className="h-24 w-24 object-contain" src="/logo.png" alt="Logo" width={64} height={64} />

          {/* Menu button for small screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 mr-5 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Nav Links */}
          <nav
            className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent transition-all ${menuOpen ? "block" : "hidden"} md:flex`}
          >
            <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
              {["Home", "About", "Projects", "Services", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-900 dark:text-gray-400 hover:text-blue-600 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/3430844.jpg"
          alt="Background"
        />

        <div className="container mx-auto px-6 z-40 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg mx-auto"
                src="/tombolo.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                priority
              />
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-6xl font-bold mt-6 text-white dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I&apos;m Joseph Mumo
            </motion.h1>
            <motion.p
              className="text-lg text-white dark:text-gray-400 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate developer at <strong>Tombolo Labs</strong>, specializing in front-end
              development, UI/UX design, and creating scalable web applications.
            </motion.p>
            <motion.div
              className="mt-8 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m a full-stack developer at <strong>Tombolo Labs</strong>, where I build innovative
            solutions for modern problems. I specialize in technologies like Next.js, React, and
            Tailwind CSS, and I&apos;m passionate about creating seamless user experiences.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl mx-auto max-w-5xl">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {skill.percentage}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Building modern, responsive, and scalable web applications.",
              },
              {
                title: "UI/UX Design",
                description: "Creating intuitive and user-friendly interfaces.",
              },
              {
                title: "Consulting",
                description: "Providing expert advice on tech stack and architecture.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h2>
          <motion.form
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Tombolo Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}