import { motion } from "motion/react";
import { Code2, Database, Server, Wrench } from "lucide-react";
import { skills } from "../data/skills";

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            Technologies and tools I use while building fullstack web
            applications and personal projects.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = icons[group.category];

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-violet-600/5"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                    <Icon size={22} className="text-violet-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {group.category}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-300"
                      >
                        <Icon size={14}    style={{ color: skill.color }} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
