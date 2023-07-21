import React, { useEffect, useState } from "react";
import { Profile, Pages, Link } from "@uniwebcms/module-sdk";
import { Card } from "./Card";
import { Box } from "./Box";
import { formatDate } from "./formatDate";

function SimpleLayout({ title, intro, children }) {
  return (
    <Box className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Box>
  );
}

function Article({ article }) {
  const { title, lastEditTime } = article.getBasicInfo();
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${article.contentId}`}>{title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={lastEditTime}
          className="md:hidden"
          decorate
        >
          {formatDate(lastEditTime.split(" ")[0])}
        </Card.Eyebrow>
        <Card.Description>Description</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={lastEditTime}
        className="mt-1 hidden md:block"
      >
        {formatDate(lastEditTime.split(" ")[0])}
      </Card.Eyebrow>
    </article>
  );
}

const renderIndex = (profiles) => {
  // return (
  //   <div className="space-y-6">
  //     {profiles.map((profile) => {
  //       const { title, subtitle } = profile.getBasicInfo();

  //       return (
  //         <Link
  //           to={profile.contentId}
  //           key={profile.key}
  //           className="block border px-6 py-4 rounded-lg bg-gray-50 hover:bg-white w-96 mx-auto"
  //         >
  //           <p className="text-xl font-bold">{title}</p>
  //           <p className="text-lg font-medium">{subtitle}</p>
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );
  console.log(profiles);
  return (
    <>
      <SimpleLayout
        title="Writing on software design, company building, and the aerospace industry."
        intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {profiles.map((article) => (
              <Article key={article.key} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
};

const renderSubpage = (key, profile) => {
  const { title, subtitle } = profile.getBasicInfo();

  return (
    <div key={key} className="px-24 py-32">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-xl font-semibold">{subtitle}</p>
    </div>
  );
};

export default function Articles(props) {
  const {
    block: { dataSource },
  } = props;

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (
      dataSource &&
      dataSource.contentType === "list" &&
      dataSource.contentId
    ) {
      Profile.getProfilesInList(dataSource.contentId).then((res) => {
        setProfiles(res);
      });
    }
  }, []);

  if (!profiles.length) return null;

  return (
    <Pages
      list={profiles}
      renderIndex={renderIndex}
      renderSubpage={renderSubpage}
    />
  );
}
