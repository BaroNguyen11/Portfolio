import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo / Copyright */}
        <div>
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white"
          >
            BAO.
          </a>

          <p className="mt-2 text-xs text-zinc-600">
            © {new Date().getFullYear()} Bao Nguyen. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/BaroNguyen11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition hover:text-white"
          >
            <Github size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/nguy%E1%BB%85n-v%C4%83n-b%E1%BA%A3o-undefined-3bba0a372/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition hover:text-white"
          >
            <Linkedin size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;