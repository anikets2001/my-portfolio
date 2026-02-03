import SmallProjectCard from "./SmallProjectCard";

const PERSONAL_PROJECTS = [
  {
    id: "portfolio-v1",
    icon: "code",
    title: "Portfolio v1",
    description:
      "My first developer portfolio built using Gatsby and Framer Motion.",
    githubHref: "#",
  },
  {
    id: "travel-analytics",
    icon: "dataset",
    title: "Travel Analytics",
    description:
      "A proof-of-concept dashboard visualizing global flight traffic patterns.",
    githubHref: "#",
  },
  {
    id: "seo-automator",
    icon: "auto_fix_high",
    title: "SEO Automator",
    description:
      "Micro-service for generating optimized metadata for airline routes.",
    githubHref: "#",
  },
];

export default function PersonalProjectsSection() {
  return (
    <div className="flex flex-col gap-6 mb-16">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Personal & Open Source
        </h3>
        <div className="h-1 w-20 bg-primary rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERSONAL_PROJECTS.map((project) => (
          <SmallProjectCard
            key={project.id}
            icon={project.icon}
            title={project.title}
            description={project.description}
            githubHref={project.githubHref}
          />
        ))}
      </div>
    </div>
  );
}
