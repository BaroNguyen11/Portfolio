import React, { useEffect } from "react";

const Background = () => {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-zinc-950 pointer-events-none">
      {/* Drifting Ambient Glowing Orbs */}
      {/* <div className="absolute inset-0 opacity-70">
        <div className="absolute top-[10%] left-[20%] h-140 w-140 rounded-full bg-violet-600/15 blur-[120px] animate-[float-slow_25s_infinite_ease-in-out]" />
        <div className="absolute top-[40%] right-[10%] h-160 w-160 rounded-full bg-indigo-600/20 blur-[130px] animate-[float-medium_30s_infinite_ease-in-out_2s]" />
        <div className="absolute bottom-[10%] left-[30%] h-120 w-120 rounded-full bg-fuchsia-600/15 blur-[100px] animate-[float-slow_20s_infinite_ease-in-out_5s]" />
      </div> */}
      <div
        className="absolute inset-0 transition-all duration-400 delay-300"
        style={{
          background: `
            radial-gradient(
              circle 200px at ${mouse.x}% ${mouse.y}%,
              rgba(139, 92, 246, 0.18),
              transparent 70%
            )
          `,
        }}
      />
      {/* SVG Grid Overlay fading out at the screen edges */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-zinc-700) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-zinc-700) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default Background;
