import React from "react";

import { Card } from "./Card";
import Section from "./Section";

export default function ToolSection({ block: { items, title } }) {
  const tools = items.map((tool) => {
    title: tool.header.title;
    body: tool.body.paragraphs;
  });
  return (
    <Section title={title}>
      <ul role="list" className="space-y-16">
        {tools.map((tool) => {
          <Tool title={tool.title}>{tool.body.paragraphs}</Tool>;
        })}
      </ul>
    </Section>
  );
}

function Tool({ title, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {children.map((child) => (
        <Card.Description>{child}</Card.Description>
      ))}
    </Card>
  );
}
