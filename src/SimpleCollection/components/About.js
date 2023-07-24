import React from "react";
import { Link, Image, SafeHtml } from "@uniwebcms/module-sdk";
import clsx from "clsx";

import { Box } from "./Box";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  EmailIcon,
} from "./Icons";
// import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        to={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">
          <SafeHtml value={children} />
        </span>
      </Link>
    </li>
  );
}

export default function About({
  profile,
  block: {
    main: {
      body: { imgs, headings, paragraphs },
      body,
    },
    params,
  },
  ...props
}) {
  return (
    <Box className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              value={imgs[0].value}
              profile={profile}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1>
            <SafeHtml
              as="h1"
              value={headings[0]}
              className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            />
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {paragraphs.map((paragraph) => (
              <SafeHtml as="p" value={paragraph} />
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {params.twitter && (
              <SocialLink
                href={"https://twitter.com/" + params.twitter}
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
            )}
            {params.instagram && (
              <SocialLink
                href={"https://instagram.com/" + params.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
            )}
            {params.github && (
              <SocialLink
                href={"https://github.com/" + params.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
            )}
            {params.linkedin && (
              <SocialLink
                href={"https://linkedin.com/in/" + params.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
            )}
            {params.email && (
              <SocialLink
                href={"mailto:" + params.email}
                icon={EmailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {params.email}
              </SocialLink>
            )}
          </ul>
        </div>
      </div>
    </Box>
  );
}
