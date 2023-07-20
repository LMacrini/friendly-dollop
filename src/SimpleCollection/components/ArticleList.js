import React, { useState, useEffect } from "react";
import { Profile, useLoadProfileBody } from "@uniwebcms/module-sdk";
import { Card } from "./Card";
import { formatDate } from "./formatDate";

function Article({ profile }) {
  let body = "";
  let profileContent = {};

  if (useLoadProfileBody(profile)) {
    body = profile.at("article_body");
  }
  console.log("profile ", profile, profile.getLocationSchema);

  const { title, lastEditTime } = profile.getBasicInfo();

  return (
    <Card as="article">
      <Card.Title href={`articles/${profile.contentId}`}>{title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={lastEditTime} decorate>
        {formatDate(lastEditTime.split(" ")[0])}
      </Card.Eyebrow>
      <Card.Description>Description</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function ArticleList(props) {
  console.log(props);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Profile.getProfilesInList(props.block.dataSource.contentId).then((data) => {
      setArticles(data);
    });
  }, []);
  return (
    <div className="flex flex-col gap-16">
      {articles.slice(0, 3).map((article) => (
        <Article key={article.key} profile={article} />
      ))}
    </div>
  );
}
