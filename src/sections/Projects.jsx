import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Things I've built
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            A selection of projects that represent my experience with
            frontend, backend, and fullstack development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;