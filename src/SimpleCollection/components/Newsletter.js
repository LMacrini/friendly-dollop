import React from "react";
import { MailIcon } from "./Icons";
import Button from "./Button";
import { SafeHtml } from "@uniwebcms/module-sdk";

export default function Newsletter({
  block: {
    main: {
      header,
      body: { paragraphs },
    },
  },
}) {
  return (
    <form
      action="thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <SafeHtml as="span" value={header.title} className="ml-3" />
      </h2>
      <SafeHtml
        as="p"
        value={paragraphs[0]}
        className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"
      />
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}
