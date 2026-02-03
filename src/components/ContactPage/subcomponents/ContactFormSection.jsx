"use client";

import { useState } from "react";

const INPUT_CLASS =
  "flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#324467] bg-gray-50 dark:bg-[#111722] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] p-[15px] text-base font-normal leading-normal";
const TEXTAREA_CLASS =
  "flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#324467] bg-gray-50 dark:bg-[#111722] min-h-48 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] p-[15px] text-base font-normal leading-normal";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to API or server action
  }

  return (
    <div className="bg-white dark:bg-[#192233] p-6 rounded-xl border border-gray-200 dark:border-[#324467]">
      <form action="#" className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Name
            </p>
            <input
              className={INPUT_CLASS}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Email
            </p>
            <input
              className={INPUT_CLASS}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <label className="flex flex-col w-full">
          <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
            Subject
          </p>
          <input
            className={INPUT_CLASS}
            placeholder="What's this regarding?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label className="flex flex-col w-full">
          <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
            Message
          </p>
          <textarea
            className={TEXTAREA_CLASS}
            placeholder="Tell me more about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
          />
        </label>
        <button
          type="submit"
          className="flex w-full md:w-fit min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] self-end"
        >
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
