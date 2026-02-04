import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageHeading from "@/components/ContactPage/subcomponents/PageHeading";
import ContactFormSection from "@/components/ContactPage/subcomponents/ContactFormSection";
import ContactDetailsSection from "@/components/ContactPage/subcomponents/ContactDetailsSection";

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col pt-[72px] sm:pt-20">
      <Header currentPath="/contact" />
      <main className="flex-grow flex flex-col items-center py-8 sm:py-10 md:py-12 px-3 sm:px-4">
        <div className="max-w-[960px] w-full min-w-0">
          <PageHeading />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
            <div className="lg:col-span-2">
              <ContactFormSection />
            </div>
            <div>
              <ContactDetailsSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
