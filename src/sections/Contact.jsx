import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's connect
          </h2>

          <p className="mt-5 leading-7 text-zinc-500">
            I'm currently focused on improving my skills and building fullstack
            projects. If you'd like to connect, feel free to reach out through
            the links below.
          </p>

          {/* Email */} 

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bao927471@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            <Mail size={17} />
            Get In Touch
          </a>
          {/* Social */}
          <div className="mt-8 flex justify-center gap-5">
            <a
              href="https://github.com/BaroNguyen11"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-v%C4%83n-b%E1%BA%A3o-undefined-3bba0a372/"
              aria-label="LinkedIn"
              className="text-zinc-500 transition hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={21} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
