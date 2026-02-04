"use client";

import { useState } from "react";

const FORMSPREE_FORM_ID = "xwvqgawa";

const INPUT_CLASS =
  "flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#324467] bg-gray-50 dark:bg-[#111722] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] p-[15px] text-base font-normal leading-normal";
const TEXTAREA_CLASS =
  "flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#324467] bg-gray-50 dark:bg-[#111722] min-h-48 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] p-[15px] text-base font-normal leading-normal";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white dark:bg-[#192233] p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 dark:border-[#324467] min-w-0">
      <form action="#" className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-4">
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
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-sm font-medium">
            Message sent! I&apos;ll get back to you.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-sm font-medium">
            Something went wrong. Please try again.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full md:w-fit min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] self-end disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{status === "sending" ? "Sending…" : "Send Message"}</span>
        </button>
      </form>
    </div>
  );
}
