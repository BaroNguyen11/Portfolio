import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "#home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        if (section.offsetTop <= scrollPosition) {
          currentSection = item.href;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          BAO<span className="text-violet-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative py-2 text-sm transition-colors ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-violet-500"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg cursor-pointer text-zinc-400 transition hover:bg-zinc-900 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-zinc-900 bg-zinc-950 md:hidden"
          >
            <div className="mx-auto max-w-6xl px-6 py-4">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`border-b border-zinc-900 py-4 text-sm transition-colors last:border-b-0 ${
                      active === item.href
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
