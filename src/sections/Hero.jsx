import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import DeveloperCard from "../components/DeveloperCard";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-16 sm:py-20 lg:py-0"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* Small introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-violet-400"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Bao Nguyen
          </motion.h1>

          {/* Job title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl font-semibold text-zinc-400 sm:text-3xl"
          >
            Fullstack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
          >
            I'm an IT student focused on fullstack web development, building
            projects with React, Java, Spring Boot, Node.js, and modern database
            technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#projects");
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              View Projects
              <ArrowDown size={17} />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/BaroNguyen11"
              className="text-zinc-500 transition hover:text-white"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-v%C4%83n-b%E1%BA%A3o-undefined-3bba0a372/"
              className="text-zinc-500 transition hover:text-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={21} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden justify-center lg:flex"
        >
          <DeveloperCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
