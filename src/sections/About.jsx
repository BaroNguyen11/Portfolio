import { Code2, GraduationCap, Rocket } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A little bit about me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xl leading-8 text-zinc-300">
              I'm an IT student focused on becoming a
              <span className="font-medium text-white">
                {" "}
                Fullstack Developer.
              </span>
            </p>

            <p className="mt-6 text-base leading-7 text-zinc-500">
              I enjoy turning ideas into working applications — from designing
              interfaces with React to building APIs and backend systems with
              Java, Spring Boot, and Node.js.
            </p>

            <p className="mt-6 text-base leading-7 text-zinc-500">
              Most of my experience comes from personal projects and university
              coursework. I'm currently focusing on improving my backend
              knowledge, software architecture, and the way I design and build
              production-ready applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-400">
                Fullstack Development
              </span>

              <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-400">
                Backend
              </span>

              <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-400">
                Software Architecture
              </span>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4"
          >
            {/* Education */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700">
              <GraduationCap size={24} className="text-violet-400" />

              <h3 className="mt-4 font-semibold text-white">Education</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Industrial University of Ho Chi Minh City
              </p>
            </div>

            {/* Development */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700">
              <Code2 size={24} className="text-violet-400" />

              <h3 className="mt-4 font-semibold text-white">
                Fullstack Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                React, Java, Spring Boot, Node.js, and databases
              </p>
            </div>

            {/* Currently Learning */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700">
              <Rocket size={24} className="text-violet-400" />

              <h3 className="mt-4 font-semibold text-white">
                Currently Learning
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Software architecture, backend development, and
                production-oriented application development
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
