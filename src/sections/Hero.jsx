import { ArrowDown } from "lucide-react";
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
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden py-16 sm:py-20 lg:py-0"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* Small introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400"
          >
            Fullstack Developer
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

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
          >
            IT student building fullstack web apps with React, Spring Boot, Node.js, and modern databases.
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
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
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
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500/60"
            >
              Contact Me
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
