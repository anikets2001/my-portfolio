import ProjectCard from "./ProjectCard";

const FEATURED_PROJECTS = [
  {
    id: "flights-seo",
    title: "Flights SEO App - Yatra.com",
    badge: "Professional",
    description:
      "Architected and optimized flight search landing pages to achieve high Core Web Vitals scores and improve organic search visibility. Leveraged SSR for dynamic content delivery.",
    tags: ["Next.js", "Redux", "Node.js", "SSR"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDewIX1Booz4ijntj8eQUEN8eUKHUyOuscqCU3eFRom9rb7XFc6FmFWm_B8EOAoDIc7bFSrggd6-4BYlhfMHYX1PDYduY4FvS_LUrXMSyAGfb3HVpr4kNpGBOTYRdaD3kiwa2GXw7DXoxQb46pG9vXsFTRshnohHXusyqX4h6BFmfgQcTdMXEXCk9oLEumBxYCx4uS8AMAPI18rKHhGurQYPdn63bwp4dX_PxpJ5S58sLHATUcwEkZLgaY739fVXpXgo0arkPtmNuc",
    imageAlt: "UI screenshot of Flights SEO dashboard with travel metrics",
  },
  {
    id: "eaton",
    title: "EATON Platform - IoT83",
    badge: "Enterprise",
    description:
      "A complex industrial IoT monitoring system for energy management. Built data-intensive dashboards featuring real-time telemetry and predictive maintenance alerts.",
    tags: ["React", "D3.js", "GraphQL", "TypeScript"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MQWE86XJwKghqKe34LqjZZcerfTz75L2Jr0UWDib_rJpjGSbp5Zn25l61J4n1y5QBIV6ipwylXeHYaIWEa8C-QRTrRX9CTSAMWcEt-9aC2imowRgybSenB_LKa89nYzxjl6O1dYSzLc2oFpFVXxV_BSUmqnUJutAfo-nQP8CK0O05kr6UywzwSUfMU9CEjE7EkVCvNwSeJgxCYsrm1uylEBRkmYNc29dJ4oq1u_WwfxCKKPonBRPJnltteC_CvmXE6PD7YvemJM",
    imageAlt:
      "Industrial IoT dashboard with data visualizations and charts",
  },
];

export default function FeaturedProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {FEATURED_PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          badge={project.badge}
          description={project.description}
          tags={project.tags}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
        />
      ))}
    </div>
  );
}
