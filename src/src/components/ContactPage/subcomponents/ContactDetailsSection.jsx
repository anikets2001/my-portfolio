import Image from "next/image";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBht9WjHQ6uZ_UmlmVjZYtOsSEhtzpN_S6xxOPR60TsqOJJw0eIx1YybBhyw1HadL9jwHk6qtuo1r-hiDafutSGCFn7muSe-5dQWoAYx82HivSa4s0uosBRDhRZW2QGoIDloMzMfMvjZP_5d2G_39jdcpR4Z2byxdc6qw7hXv1eAcEyU6SPGBnnKWtis3W3tS-_mp5PTA0t30LTT-vpDM9bhWLbg3qmNaYNxNl9dpScUmhXM-78I4Ddt_AgwTBU7_1nO3vp5meEyiw";

const CONTACT_ITEMS = [
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: "aniket.singh@yatra.com",
    href: null,
  },
  {
    id: "linkedin",
    icon: "link",
    label: "LinkedIn",
    value: "linkedin.com/in/aniketsingh",
    href: "#",
  },
  {
    id: "github",
    icon: "code",
    label: "GitHub",
    value: "github.com/aniketsingh",
    href: "#",
  },
  {
    id: "location",
    icon: "location_on",
    label: "Location",
    value: "Gurugram, India",
    href: null,
  },
];

export default function ContactDetailsSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border border-primary/20">
        <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-6">
          Contact Details
        </h3>
        <div className="flex flex-col gap-6">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="size-12 flex items-center justify-center bg-white dark:bg-[#192233] rounded-full border border-gray-200 dark:border-[#324467] text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p className="text-gray-500 dark:text-[#92a4c9] text-xs font-bold uppercase tracking-wider">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    className="text-primary hover:underline text-sm font-medium"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-900 dark:text-white text-sm font-medium">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Map Placeholder */}
      <div className="relative h-48 w-full rounded-xl overflow-hidden grayscale contrast-125 dark:opacity-80 border border-gray-200 dark:border-[#324467]">
        <Image
          alt="Map showing office location - Gurugram, India"
          className="w-full h-full object-cover"
          src={MAP_IMAGE}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      </div>
    </div>
  );
}
