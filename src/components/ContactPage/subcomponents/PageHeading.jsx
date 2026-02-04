export default function PageHeading() {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4 mb-6 sm:mb-8">
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
        <p className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
          Get in Touch
        </p>
        <p className="text-gray-600 dark:text-[#92a4c9] text-sm sm:text-base font-normal leading-normal max-w-2xl">
          I&apos;m currently open to new opportunities and collaborations.
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
      </div>
    </div>
  );
}
