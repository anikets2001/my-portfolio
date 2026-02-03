import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageHeading from "@/components/ExperiencePage/subcomponents/PageHeading";
import CareerPathSection from "@/components/ExperiencePage/subcomponents/CareerPathSection";
import KeyImpactSection from "@/components/ExperiencePage/subcomponents/KeyImpactSection";
import EducationCertificationsSection from "@/components/ExperiencePage/subcomponents/EducationCertificationsSection";

const SECTION_WRAPPER_CLASS =
  "px-4 md:px-40 flex justify-center py-5";
const INNER_CONTAINER_CLASS =
  "layout-content-container flex flex-col max-w-[960px] flex-1";

export default function ExperiencePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPath="/experience" />
        <main className="flex-1 flex flex-col items-center text-slate-900 dark:text-white">
          {/* Page Heading */}
          <div className={SECTION_WRAPPER_CLASS}>
            <div className={INNER_CONTAINER_CLASS}>
              <PageHeading />
            </div>
          </div>
          {/* Career Path */}
          <div className={SECTION_WRAPPER_CLASS}>
            <div className={INNER_CONTAINER_CLASS}>
              <CareerPathSection />
            </div>
          </div>
          {/* Key Impact */}
          <div className={SECTION_WRAPPER_CLASS}>
            <div className={INNER_CONTAINER_CLASS}>
              <KeyImpactSection />
            </div>
          </div>
          {/* Education & Certifications */}
          <div className="px-4 md:px-40 flex justify-center py-10">
            <div className={INNER_CONTAINER_CLASS}>
              <EducationCertificationsSection />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
