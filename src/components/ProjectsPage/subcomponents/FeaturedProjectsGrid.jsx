import ProjectCard from "./ProjectCard";

const FEATURED_PROJECTS = [
  {
    id: "flights-seo",
    title: "Flights SEO App - Yatra.com",
    badge: "Yatra Product",
    description:
      "Architected and optimized flight search landing pages to achieve high Core Web Vitals scores and improve organic search visibility. Leveraged SSR for dynamic content delivery.",
    tags: ["Next.js", "Javascript", "SSR", "Tailwind-Css"],
    imageSrc: "/images/yatra-seo.png",
    imageAlt: "UI screenshot of Flights SEO dashboard with travel metrics",
    url: "https://www.yatra.com/cheap-flights/search/delhi-to-mumbai-flights",
  },
  {
    id: "yatra-trains",
    title: "Yatra Trains - Yatra.com",
    badge: "Yatra Product",
    description:
      "Led the development of a high-traffic train booking platform, implementing server-side rendering for improved SEO and performance. Integrated complex search and booking flows while maintaining a responsive design.",
    tags: ["Next.js", "Javascript", "SSR", "Redux Toolkit", "Tailwind-Css"],
    imageSrc: "/images/yatra-trains.png",
    imageAlt: "UI screenshot of Yatra Trains platform with train schedules and booking options",
    url: "https://rail.yatra.com/trains/b2c/listing",
  },
  {
    id: "eaton",
    title: "EATON Platform - IoT83",
    badge: "Eaton Project",
    description:
      "A complex industrial IoT monitoring system for energy management. Built data-intensive dashboards featuring real-time telemetry and predictive maintenance alerts.",
    tags: ["React", "JavaScript", "TypeScript", "MUI", "Cypress"],
    imageSrc: "/images/chart.png",
    imageAlt: "Industrial IoT dashboard with data visualizations and charts",
    url: "https://www.eaton.com/us/en-us/digital/brightlayer.html",
  },
];

export default function FeaturedProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
      {FEATURED_PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          badge={project.badge}
          description={project.description}
          tags={project.tags}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          liveUrl={project.url}
        />
      ))}
    </div>
  );
}
