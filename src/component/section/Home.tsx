import { useLanguage } from '../../context/LanguageContext';
import { homeData } from '../../data/section/Home.data';

export const Home = () => {
  const { language } = useLanguage();
  const data = homeData[language];

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            {/* Main Heading & Role */}
            <div className="space-y-2.5 w-full">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug">
                {data.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                {data.role}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify font-normal w-full">
              {data.description}
            </p>
          </div>

          {/* Profile Visual Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-b from-blue-500/20 via-zinc-400/20 to-purple-500/20 dark:from-blue-500/10 dark:via-zinc-700/20 dark:to-purple-500/10 opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100" />

              {/* Photo Container - full natural colors */}
              <div className="relative aspect-square w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-xl">
                <img
                  src="/foto.jpg"
                  alt={data.name}
                  className="h-full w-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 border-t border-zinc-200 dark:border-zinc-800/80 pt-12">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-900/30 text-center sm:text-left transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col justify-center"
            >
              <div className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold font-mono text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
