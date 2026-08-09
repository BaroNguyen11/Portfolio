import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-violet-600/5"
    >
      {/* Project preview */}
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/20" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-zinc-800/70 px-2.5 py-1 text-xs font-medium text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5 border-t border-zinc-800 pt-5">
          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 ease-out hover:text-white"
            >
              <Github size={17} />
              GitHub
            </a>
          )}

          {/* Live Demo */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors duration-200 ease-out hover:text-white"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;