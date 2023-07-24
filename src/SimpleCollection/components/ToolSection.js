import React from "react";
import { Profile } from "@uniwebcms/module-sdk";
import { Card } from "./Card";
import Section from "./Section";

export default function ToolSection({ block: { items, title, main } }) {
  const tools =
    items.length != 0
      ? items.map((tool) => {
          return {
            title: tool.header.description,
            body: tool.body.paragraphs,
          };
        })
      : [{ title: main.header.description, body: main.body.paragraphs }];
  return (
    <Section title={Profile.stripTags(title)}>
      <ul role="list" className="space-y-16">
        {tools.map((tool) => {
          return <Tool title={tool.title}>{tool.body}</Tool>;
        })}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li" href={href}>
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {children.map((child) => {
        return <Card.Description>{child}</Card.Description>;
      })}
    </Card>
  );
}
