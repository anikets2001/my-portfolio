const CERTIFICATIONS = [
  {
    id: "aws",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
  },
  {
    id: "meta",
    title: "Meta Frontend Developer",
    issuer: "Coursera",
  },
];

export default function EducationCertificationsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-2 sm:px-4 min-w-0">
      <div>
        <h2 className="text-slate-900 dark:text-white text-lg sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4 sm:pb-6">
          Education
        </h2>
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-slate-300 dark:border-[#324467]">
            <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark" />
            <p className="text-slate-900 dark:text-white font-bold">
              Bachelor of Technology in CSE
            </p>
            <p className="text-slate-600 dark:text-[#92a4c9] text-sm">
              GLA University | 2019 - 2023
            </p>
            <p className="text-slate-600 dark:text-[#92a4c9] text-sm mt-1">
              Specialization Computer Science & Engineering
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-slate-300 dark:border-[#324467]">
            <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark" />
            <p className="text-slate-900 dark:text-white font-bold">
              Intermediate
            </p>
            <p className="text-slate-600 dark:text-[#92a4c9] text-sm">
              SBS School, Bilari | 2018 - 2019
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-slate-300 dark:border-[#324467]">
            <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark" />
            <p className="text-slate-900 dark:text-white font-bold">
              High School
            </p>
            <p className="text-slate-600 dark:text-[#92a4c9] text-sm">
              SBS School, Bilari | 2016 - 2017
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">
          Certifications
        </h2>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center gap-4 p-3 rounded-lg bg-slate-100 dark:bg-[#1a2333] border border-slate-200 dark:border-[#232f48]"
            >
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-white text-sm font-bold">{cert.title}</p>
                <p className="text-slate-600 dark:text-[#92a4c9] text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
