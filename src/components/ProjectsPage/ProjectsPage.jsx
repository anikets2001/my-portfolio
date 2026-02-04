import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageHeading from "@/components/ProjectsPage/subcomponents/PageHeading";
import CategoryChips from "@/components/ProjectsPage/subcomponents/CategoryChips";
import PersonalProjectsSection from "./subcomponents/PersonalProjectsSection";
import FeaturedProjectsGrid from "./subcomponents/FeaturedProjectsGrid";

export default function ProjectsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pt-[72px] sm:pt-20">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPath="/projects" />
        <main className="flex-1 flex flex-col items-center">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] py-8 sm:py-10 px-3 sm:px-4 md:px-10 min-w-0">
            <PageHeading />
            <CategoryChips />
            <FeaturedProjectsGrid />
            <PersonalProjectsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
