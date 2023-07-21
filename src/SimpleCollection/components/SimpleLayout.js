import React from "react";
import { Box } from "./Box";

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
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {paragraphs[0]}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Blocks blocks={childBlocks} />
      </div>
    </Box>
  );
}
