import { Code2, Database, Server } from "lucide-react";

const DeveloperCard = () => {
  return (
    <div className="relative w-full max-w-md">

      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-3xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-md shadow-2xl">

        {/* Header with status */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400">
              Available for work
            </span>
          </div>

          <span className="font-mono text-xs text-zinc-500">
            developer.js
          </span>
        </div>

        {/* Code */}
        <div className="space-y-5 p-6 font-mono text-sm">

          <div>
            <p className="text-zinc-500">
              01
            </p>

            <p>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-blue-300">developer</span>{" "}
              = {"{"}
            </p>
          </div>

          <div className="pl-6">
            <p>
              <span className="text-zinc-400">name:</span>{" "}
              <span className="text-green-400">
                "Nguyen Van Bao"
              </span>
              ,
            </p>

            <p>
              <span className="text-zinc-400">role:</span>{" "}
              <span className="text-green-400">
                "Fullstack Developer"
              </span>
              ,
            </p>

            <p>
              <span className="text-zinc-400">location:</span>{" "}
              <span className="text-green-400">
                "Ho Chi Minh City"
              </span>
              ,
            </p>
          </div>

          <div>
            <p className="text-zinc-500">
              06
            </p>

            <p>{"};"}</p>
          </div>

        </div>

        {/* Skills */}
        <div className="grid grid-cols-3 border-t border-zinc-800">

          <div className="flex flex-col items-center gap-2 p-5">
            <Code2
              size={20}
              className="text-violet-400"
            />

            <span className="text-xs text-zinc-500">
              Frontend
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-x border-zinc-800 p-5">
            <Server
              size={20}
              className="text-violet-400"
            />

            <span className="text-xs text-zinc-500">
              Backend
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 p-5">
            <Database
              size={20}
              className="text-violet-400"
            />

            <span className="text-xs text-zinc-500">
              Database
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DeveloperCard;