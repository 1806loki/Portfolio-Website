

const Skills = () => {
  return (
    <div>
      <div className="col-span-2 py-6 md:col-span-2 lg:col-span-3">
        <div className="text-2xl font-medium mt-2 text-zinc-200 mb-5">
          What I know
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Frontend
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-red-400/60">
                HTML
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-yellow-400/60">
                CSS
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                Tailwind
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                Javascript
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-pink-700">
                Typescript
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                React Js
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-white/60">
                Next Js 13
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Backend
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">
                Node Js
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">
                Express Js
              </div>

              <div className="rounded-md bg-body text-xs text-primary p-2 border border-violet-400/60">
                Next Auth
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Database
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                MySql
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-emerald-500/60">
                MongoDB
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
            <div className="text-primary font-medium text-lg tracking-wider">
              Devops
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60">
                GIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
