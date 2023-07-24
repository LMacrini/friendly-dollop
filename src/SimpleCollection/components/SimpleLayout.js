import React from "react";
import { Box } from "./Box";
import { SafeHtml } from "@uniwebcms/module-sdk";

export default function SimpleLayout({
  block: {
    Blocks,
    childBlocks,
    main: {
      header: { title },
      body: { paragraphs },
    },
  },
}) {
  return (
    <Box className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <SafeHtml
          as="h1"
          value={title}
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        />
        <SafeHtml
          as="p"
          value={paragraphs[0]}
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        />
      </header>
      <div className="mt-16 sm:mt-20">
        <Blocks blocks={childBlocks} />
      </div>
    </Box>
  );
}
