import React from "react";
import { Image } from "@uniwebcms/module-sdk";
import clsx from "clsx";

export default function Photos({
  block: {
    main: {
      banner,
      body: { imgs },
    },
  },
  profile,
}) {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[banner, ...imgs].map((image, imageIndex) => (
          <div
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              value={image.value}
              alt=""
              //   sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              profile={profile}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
