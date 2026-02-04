import SmallProjectCard from "./SmallProjectCard";

const PERSONAL_PROJECTS = [
  {
    id: "expense-tracker",
    icon: "code",
    title: "Expense-Tracker Application",
    description:
      "Expense-Tracker Application build with MERN Stack (Under development).",
    githubHref: "https://github.com/anikets2001/expense_tracker",
    liveUrl: "https://expense-tracker-finance.vercel.app/dashboard",
  },
  {
    id: "holygrims",
    icon: "travel",
    title: "Holygrims",
    description:
      "Travel Website for Religious places",
    githubHref: "https://github.com/Ayodhya-tours",
    liveUrl: null,
  },
];

export default function PersonalProjectsSection() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 mb-10 sm:mb-16 min-w-0">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Personal
        </h3>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {PERSONAL_PROJECTS.map((project) => (
          <SmallProjectCard
            key={project.id}
            icon={project.icon}
            title={project.title}
            description={project.description}
            githubHref={project.githubHref}
            liveUrl={project?.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}
