import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-zinc-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My education
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            My academic background and the foundation I'm building
            for a career in software development.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
        >
          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">

            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
              <GraduationCap
                size={28}
                className="text-violet-400"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-medium text-violet-400">
                2023 — Present
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Information Technology
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                University Student
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
                Studying software development, web technologies,
                databases, object-oriented programming, software
                engineering and computer science fundamentals.
              </p>

              {/* Areas */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Database",
                  "OOP",
                  "Software Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;