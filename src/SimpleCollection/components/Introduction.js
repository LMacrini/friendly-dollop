import React from "react";
import { Container } from "./Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./SocialIcons";
import { Link } from "@uniwebcms/module-sdk";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Introduction({
  block: {
    main: {
      header,
      body: { paragraphs },
    },
    params,
  },
}) {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {header.title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {paragraphs[0]}
        </p>
        <div className="mt-6 flex gap-6">
          {params.twitter && (
            <SocialLink
              to={"https://twitter.com/" + params.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
          )}
          {params.instagram && (
            <SocialLink
              to={"https://instagram.com/" + params.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          )}
          {params.github && (
            <SocialLink
              to={"https://github.com/" + params.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          )}
          {params.linkedin && (
            <SocialLink
              to={"https://linkedin.com/in/" + params.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
