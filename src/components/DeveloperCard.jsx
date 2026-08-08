import { Code2, Database, Server } from "lucide-react";

const DeveloperCard = () => {
  return (
    <div className="relative w-full max-w-md">

      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-3xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl">

        {/* Window header */}
        <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-zinc-700" />

          <span className="ml-3 text-xs text-zinc-500">
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